import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, LayoutGrid, List, MapPin, Building2, Map } from "lucide-react";
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
import warehouseImg1 from "@assets/generated_images/Industrial_warehouse_exterior_0f9ece73.png";
import manufacturingImg from "@assets/generated_images/Manufacturing_facility_exterior_d551b1cc.png";
import distributionImg from "@assets/generated_images/Distribution_center_aerial_62429a4e.png";

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
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [selectedProperty, setSelectedProperty] = useState<IndustrialProperty | null>(null);

  const imageMap: Record<string, string> = {
    "/src/attached_assets/generated_images/Industrial_warehouse_exterior_0f9ece73.png": warehouseImg1,
    "/src/attached_assets/generated_images/Manufacturing_facility_exterior_d551b1cc.png": manufacturingImg,
    "/src/attached_assets/generated_images/Distribution_center_aerial_62429a4e.png": distributionImg,
  };

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
                  <Button
                    variant={viewMode === "map" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("map")}
                    data-testid="button-map-view"
                  >
                    <Map className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {viewMode === "map" ? (
                <MapView
                  properties={filteredProperties}
                  onViewDetails={setSelectedProperty}
                  imageMap={imageMap}
                />
              ) : filteredProperties.length > 0 ? (
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
                  {filteredProperties.map((property, index) => (
                    <PropertyListingCard
                      key={property.id}
                      property={property}
                      index={index}
                      viewMode={viewMode}
                      onViewDetails={() => setSelectedProperty(property)}
                      imageMap={imageMap}
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
        imageMap={imageMap}
      />
    </div>
  );
}

function MapView({
  properties,
  onViewDetails,
  imageMap,
}: {
  properties: IndustrialProperty[];
  onViewDetails: (property: IndustrialProperty) => void;
  imageMap: Record<string, string>;
}) {
  const [selectedMapProperty, setSelectedMapProperty] = useState<IndustrialProperty | null>(null);

  const submarketPositions: Record<string, { top: string; left: string }> = {
    "Ambattur Industrial Estate": { top: "35%", left: "42%" },
    "Sriperumbudur": { top: "55%", left: "25%" },
    "Oragadam": { top: "58%", left: "30%" },
    "Mahindra World City": { top: "65%", left: "35%" },
    "Maraimalai Nagar": { top: "72%", left: "45%" },
    "Irungattukottai": { top: "50%", left: "32%" },
    "Gummidipoondi": { top: "20%", left: "48%" },
    "Thiruvallur": { top: "25%", left: "40%" },
  };

  if (properties.length === 0) {
    return (
      <Card className="glassmorphism border-primary/30">
        <CardContent className="p-12 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-bold mb-2 text-foreground">No Properties on Map</h3>
          <p className="text-muted-foreground">
            Adjust your filters to see properties on the map
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="glassmorphism border-primary/30 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-card border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Map className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Chennai Industrial Properties Map</h3>
                  <p className="text-sm text-muted-foreground">
                    {properties.length} {properties.length === 1 ? 'property' : 'properties'} available
                  </p>
                </div>
              </div>
              <Badge className="glow-blue">
                Interactive View
              </Badge>
            </div>
          </div>

          <div className="relative aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-md p-3 border border-border shadow-lg">
              <p className="text-xs font-semibold text-foreground mb-1">Chennai Region</p>
              <p className="text-xs text-muted-foreground">Industrial Zones</p>
            </div>

            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-md p-3 border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Under Offer</span>
                </div>
              </div>
            </div>

            {properties.map((property, index) => {
              const position = submarketPositions[property.submarket] || { top: "50%", left: "50%" };
              const isSelected = selectedMapProperty?.id === property.id;
              const markerColor = property.status === "available" ? "bg-green-500" : "bg-yellow-500";

              return (
                <div
                  key={property.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ top: position.top, left: position.left }}
                  data-testid={`map-pin-${index}`}
                >
                  <div
                    className={`relative cursor-pointer transition-all ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110'
                    }`}
                    onClick={() => setSelectedMapProperty(isSelected ? null : property)}
                  >
                    <div className={`w-8 h-8 rounded-full ${markerColor} border-2 border-white shadow-lg animate-pulse flex items-center justify-center`}>
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-current opacity-25 animate-ping" style={{ animationDuration: '2s' }} />
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 top-10 w-80 z-30"
                    >
                      <Card className="glassmorphism border-primary/50 shadow-2xl">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            {property.thumbnailUrl && imageMap[property.thumbnailUrl] && (
                              <div className="w-24 h-20 flex-shrink-0 rounded-md overflow-hidden">
                                <img
                                  src={imageMap[property.thumbnailUrl]}
                                  alt={property.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-foreground text-sm mb-1 line-clamp-1">
                                {property.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {property.submarket}
                              </p>
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <p className="text-xs text-muted-foreground">Area</p>
                                  <p className="text-sm font-semibold text-foreground">
                                    {property.squareFootage.toLocaleString()} sq ft
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-muted-foreground">Price</p>
                                  <p className="text-sm font-semibold text-primary">
                                    {property.totalPrice >= 10000000
                                      ? `₹${(property.totalPrice / 10000000).toFixed(2)} Cr`
                                      : `₹${(property.totalPrice / 100000).toFixed(2)} L`}
                                  </p>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                className="w-full glow-blue hover:glow-blue-strong"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onViewDetails(property);
                                }}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>
              );
            })}

            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="text-primary/20">
                <line x1="20%" y1="35%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="30%" y1="20%" x2="60%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {properties.map((property, index) => (
          <Card
            key={property.id}
            className={`glassmorphism border-primary/30 hover:border-primary/60 transition-all hover-elevate cursor-pointer ${
              selectedMapProperty?.id === property.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => {
              setSelectedMapProperty(property);
              onViewDetails(property);
            }}
            data-testid={`card-map-property-${index}`}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                {property.thumbnailUrl && imageMap[property.thumbnailUrl] && (
                  <div className="w-32 h-24 flex-shrink-0 rounded-md overflow-hidden">
                    <img
                      src={imageMap[property.thumbnailUrl]}
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground text-sm line-clamp-1">{property.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{property.submarket}, {property.city}</p>
                    </div>
                    <Badge
                      className={`text-xs ${
                        property.status === "available"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {property.status === "available" ? "Available" : "Under Offer"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div>
                      <p className="text-muted-foreground">Area</p>
                      <p className="font-semibold text-foreground">{property.squareFootage.toLocaleString()} sq ft</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-semibold text-primary">
                        {property.totalPrice >= 10000000
                          ? `₹${(property.totalPrice / 10000000).toFixed(2)} Cr`
                          : `₹${(property.totalPrice / 100000).toFixed(2)} L`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PropertyListingCard({
  property,
  index,
  viewMode,
  onViewDetails,
  imageMap,
}: {
  property: IndustrialProperty;
  index: number;
  viewMode: "grid" | "list" | "map";
  onViewDetails: () => void;
  imageMap: Record<string, string>;
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
              {property.thumbnailUrl && imageMap[property.thumbnailUrl] && (
                <div className="sm:w-80 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={imageMap[property.thumbnailUrl]}
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
        {property.thumbnailUrl && imageMap[property.thumbnailUrl] && (
          <div className="h-56 overflow-hidden">
            <img
              src={imageMap[property.thumbnailUrl]}
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
  imageMap,
}: {
  property: IndustrialProperty | null;
  onClose: () => void;
  formatPrice: (price: number) => string;
  formatSqFt: (sqft: number) => string;
  imageMap: Record<string, string>;
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

        {property.thumbnailUrl && imageMap[property.thumbnailUrl] && (
          <div className="w-full h-96 rounded-md overflow-hidden mb-6">
            <img
              src={imageMap[property.thumbnailUrl]}
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
