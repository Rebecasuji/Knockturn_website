import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, LayoutGrid, List, MapPin, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockIndustrialProperties } from "@/data/mockProperties";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Square, IndianRupee, Calendar, CheckCircle2, Mail, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Industrial_property_hero_1d001084.png";

interface IndustrialProperty {
  id: number;
  name: string;
  city: string;
  submarket: string;
  squareFootage: number;
  pricePerSqFt: number;
  totalPrice: number;
  lotSize?: number;
  status: string;
  thumbnailUrl: string | null;
  highlights: string[];
  contactEmail: string;
  contactPhone: string;
  description: string;
  yearBuilt: number;
  zoning: string;
}

export default function IndustrialProperties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sqftRange, setSqftRange] = useState([0, 150000]);
  const [priceRange, setPriceRange] = useState([0, 600000000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProperty, setSelectedProperty] = useState<IndustrialProperty | null>(null);

  const filteredProperties = useMemo(() => {
    return mockIndustrialProperties.filter((property) => {
      const matchesSearch =
        searchQuery === "" ||
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.submarket.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectedStatus === "all" || property.status === selectedStatus;

      const matchesSqft =
        property.squareFootage >= sqftRange[0] &&
        property.squareFootage <= sqftRange[1];

      const matchesPrice =
        property.totalPrice >= priceRange[0] &&
        property.totalPrice <= priceRange[1];

      return matchesSearch && matchesStatus && matchesSqft && matchesPrice;
    });
  }, [searchQuery, selectedStatus, sqftRange, priceRange]);

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  const formatSqFt = (sqft: number) => {
    return sqft.toLocaleString("en-IN");
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="text-hero-heading"
          >
            Industrial Properties for Sale
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Discover premium industrial real estate opportunities in Chennai
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by location, property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 focus-visible:ring-primary"
                data-testid="input-hero-search"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <Card className="glassmorphism border-primary/30">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-foreground">Filters</h3>
                    </div>

                    <div>
                      <Label className="text-foreground mb-3 block text-sm font-medium">
                        Property Status
                      </Label>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-full" data-testid="select-status-sidebar">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Properties</SelectItem>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="under-offer">Under Offer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-foreground mb-3 block text-sm font-medium">
                        Square Footage
                      </Label>
                      <div className="text-sm text-muted-foreground mb-2">
                        {formatSqFt(sqftRange[0])} - {formatSqFt(sqftRange[1])} sq ft
                      </div>
                      <Slider
                        value={sqftRange}
                        onValueChange={setSqftRange}
                        min={0}
                        max={150000}
                        step={5000}
                        className="mb-2"
                        data-testid="slider-sqft-sidebar"
                      />
                    </div>

                    <div>
                      <Label className="text-foreground mb-3 block text-sm font-medium">
                        Price Range
                      </Label>
                      <div className="text-sm text-muted-foreground mb-2">
                        {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={600000000}
                        step={10000000}
                        className="mb-2"
                        data-testid="slider-price-sidebar"
                      />
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedStatus("all");
                        setSqftRange([0, 150000]);
                        setPriceRange([0, 600000000]);
                      }}
                      data-testid="button-reset-sidebar"
                    >
                      Reset All Filters
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glassmorphism border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-4">Need Assistance?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our team is ready to help you find the perfect industrial property.
                    </p>
                    <Button className="w-full glow-blue hover:glow-blue-strong" data-testid="button-contact-sidebar">
                      Contact Our Team
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            <main className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-muted-foreground" data-testid="text-results-count">
                    <span className="font-semibold text-foreground">{filteredProperties.length}</span> properties available
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    data-testid="button-grid-view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    data-testid="button-list-view"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {filteredProperties.length > 0 ? (
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
                  {filteredProperties.map((property, index) => (
                    <PropertyListingCard
                      key={property.id}
                      property={property}
                      index={index}
                      viewMode={viewMode}
                      onViewDetails={() => setSelectedProperty(property)}
                    />
                  ))}
                </div>
              ) : (
                <Card className="glassmorphism border-primary/30">
                  <CardContent className="p-12 text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-bold mb-2 text-foreground">No Properties Found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filters to see more results
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedStatus("all");
                        setSqftRange([0, 150000]);
                        setPriceRange([0, 600000000]);
                      }}
                      data-testid="button-clear-filters-empty"
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </main>
          </div>
        </div>
      </section>

      <PropertyDetailsDialog
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        formatPrice={formatPrice}
        formatSqFt={formatSqFt}
      />
    </div>
  );
}

function PropertyListingCard({
  property,
  index,
  viewMode,
  onViewDetails,
}: {
  property: IndustrialProperty;
  index: number;
  viewMode: "grid" | "list";
  onViewDetails: () => void;
}) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        data-testid={`card-property-${index}`}
      >
        <Card className="glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-hidden hover-elevate cursor-pointer" onClick={onViewDetails}>
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              {property.thumbnailUrl && (
                <div className="sm:w-80 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={property.thumbnailUrl}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{property.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{property.submarket}, {property.city}</span>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      property.status === "available"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {property.status === "available" ? "Available" : "Under Offer"}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Area</p>
                    <p className="font-semibold text-foreground">{property.squareFootage.toLocaleString()} sq ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rate/sq ft</p>
                    <p className="font-semibold text-foreground">₹{property.pricePerSqFt.toLocaleString("en-IN")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Total Price</p>
                    <p className="font-semibold text-primary">{formatPrice(property.totalPrice)}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{property.description}</p>

                <div className="flex gap-2">
                  <Button size="sm" className="glow-blue hover:glow-blue-strong">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:${property.contactEmail}`; }}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      data-testid={`card-property-${index}`}
    >
      <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-hidden hover-elevate cursor-pointer group" onClick={onViewDetails}>
        {property.thumbnailUrl && (
          <div className="h-56 overflow-hidden">
            <img
              src={property.thumbnailUrl}
              alt={property.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-foreground line-clamp-2 flex-1">{property.name}</h3>
            <Badge
              className={`ml-2 flex-shrink-0 ${
                property.status === "available"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              }`}
            >
              {property.status === "available" ? "Available" : "Under Offer"}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="line-clamp-1">{property.submarket}, {property.city}</span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Area</span>
              <span className="font-semibold text-foreground">{property.squareFootage.toLocaleString()} sq ft</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Rate/sq ft</span>
              <span className="font-semibold text-foreground">₹{property.pricePerSqFt.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="p-3 bg-primary/10 border border-primary/30 rounded-md mb-4">
            <p className="text-xs text-primary mb-1">Total Price</p>
            <p className="text-xl font-bold text-gradient">{formatPrice(property.totalPrice)}</p>
          </div>

          <Button className="w-full glow-blue hover:glow-blue-strong">
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PropertyDetailsDialog({
  property,
  onClose,
  formatPrice,
  formatSqFt,
}: {
  property: IndustrialProperty | null;
  onClose: () => void;
  formatPrice: (price: number) => string;
  formatSqFt: (sqft: number) => string;
}) {
  if (!property) return null;

  return (
    <Dialog open={!!property} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto glassmorphism border-primary/30" data-testid="dialog-property-details">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-bold text-gradient mb-2">
                {property.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 text-base">
                <MapPin className="w-4 h-4 text-primary" />
                {property.submarket}, {property.city}
              </DialogDescription>
            </div>
            <Badge
              className={`${
                property.status === "available"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              } glow-blue text-sm px-3 py-1`}
            >
              {property.status === "available" ? "Available" : "Under Offer"}
            </Badge>
          </div>
        </DialogHeader>

        {property.thumbnailUrl && (
          <div className="w-full h-96 rounded-md overflow-hidden mb-6">
            <img
              src={property.thumbnailUrl}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-card/50 rounded-md border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Square className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Area</p>
              </div>
              <p className="text-xl font-bold text-foreground">
                {formatSqFt(property.squareFootage)} sq ft
              </p>
            </div>

            <div className="p-4 bg-card/50 rounded-md border border-border">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Rate/sq ft</p>
              </div>
              <p className="text-xl font-bold text-foreground">
                ₹{property.pricePerSqFt.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="p-4 bg-card/50 rounded-md border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Square className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Lot Size</p>
              </div>
              <p className="text-xl font-bold text-foreground">
                {property.lotSize?.toLocaleString() || "N/A"} sq ft
              </p>
            </div>

            <div className="p-4 bg-card/50 rounded-md border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Year Built</p>
              </div>
              <p className="text-xl font-bold text-foreground">
                {property.yearBuilt || "N/A"}
              </p>
            </div>
          </div>

          <div className="p-6 bg-primary/10 border border-primary/30 rounded-md">
            <p className="text-sm text-primary font-medium mb-2">Total Price</p>
            <p className="text-4xl font-bold text-gradient">
              {formatPrice(property.totalPrice)}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Key Features & Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {property.zoning && (
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Zoning Information</h3>
              <Badge className="glow-blue text-sm px-3 py-1">
                {property.zoning}
              </Badge>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card/50 rounded-md border border-border">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">{property.contactEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/50 rounded-md border border-border">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">{property.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-border">
            <Button className="flex-1 glow-blue hover:glow-blue-strong" data-testid="button-schedule-visit">
              Schedule a Visit
            </Button>
            <Button variant="outline" className="flex-1 hover-elevate" data-testid="button-request-info">
              Request Information
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
