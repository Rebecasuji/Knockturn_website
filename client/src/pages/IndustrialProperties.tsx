import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
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
import PropertyCard from "@/components/PropertyCard";
import { mockIndustrialProperties } from "@/data/mockProperties";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Square, IndianRupee, Calendar, CheckCircle2, Mail, Phone } from "lucide-react";

export default function IndustrialProperties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sqftRange, setSqftRange] = useState([0, 150000]);
  const [priceRange, setPriceRange] = useState([0, 600000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

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

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedStatus("all");
    setSqftRange([0, 150000]);
    setPriceRange([0, 600000000]);
  };

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-industrial-properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-properties-heading">
              Industrial Properties for Sale
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-properties-description">
              Browse our premium selection of industrial properties in Chennai with strategic
              locations and modern facilities.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 glassmorphism p-6 rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="search-filters"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, city, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glow-blue focus:glow-blue-strong transition-all"
                  data-testid="input-search"
                />
              </div>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full lg:w-48 glow-blue" data-testid="select-status">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Properties</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="under-offer">Under Offer</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="w-full lg:w-auto gap-2 hover-elevate"
                onClick={() => setShowFilters(!showFilters)}
                data-testid="button-toggle-filters"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide" : "More"} Filters
              </Button>

              {(searchQuery || selectedStatus !== "all") && (
                <Button
                  variant="ghost"
                  className="w-full lg:w-auto gap-2 hover-elevate"
                  onClick={resetFilters}
                  data-testid="button-reset-filters"
                >
                  <X className="w-4 h-4" />
                  Reset
                </Button>
              )}
            </div>

            {showFilters && (
              <motion.div
                className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                data-testid="advanced-filters"
              >
                <div>
                  <Label className="text-foreground mb-3 block">
                    Square Footage: {sqftRange[0].toLocaleString()} - {sqftRange[1].toLocaleString()} sq ft
                  </Label>
                  <Slider
                    value={sqftRange}
                    onValueChange={setSqftRange}
                    min={0}
                    max={150000}
                    step={5000}
                    className="mb-2"
                    data-testid="slider-sqft"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-3 block">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={600000000}
                    step={10000000}
                    className="mb-2"
                    data-testid="slider-price"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground" data-testid="text-results-count">
              Showing <span className="font-semibold text-primary">{filteredProperties.length}</span> properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  index={index}
                  onViewDetails={() => setSelectedProperty(property)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              data-testid="no-results"
            >
              <p className="text-xl text-muted-foreground mb-4">No properties found matching your criteria.</p>
              <Button onClick={resetFilters} className="glow-blue hover:glow-blue-strong" data-testid="button-clear-filters">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism border-primary/30" data-testid="dialog-property-details">
          {selectedProperty && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <DialogTitle className="text-3xl font-bold text-gradient mb-2">
                      {selectedProperty.name}
                    </DialogTitle>
                    <DialogDescription className="flex items-center gap-2 text-base">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedProperty.submarket}, {selectedProperty.city}
                    </DialogDescription>
                  </div>
                  <Badge
                    className={`${
                      selectedProperty.status === "available"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    } glow-blue text-sm px-3 py-1`}
                  >
                    {selectedProperty.status === "available" ? "Available" : "Under Offer"}
                  </Badge>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-card/50 rounded-md border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Square className="w-5 h-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Area</p>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      {selectedProperty.squareFootage.toLocaleString()} sq ft
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-md border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <IndianRupee className="w-5 h-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Rate/sq ft</p>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      ₹{selectedProperty.pricePerSqFt.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-md border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Square className="w-5 h-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Lot Size</p>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      {selectedProperty.lotSize?.toLocaleString() || "N/A"} sq ft
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-md border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Year Built</p>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      {selectedProperty.yearBuilt || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-primary/10 border border-primary/30 rounded-md">
                  <p className="text-sm text-primary font-medium mb-2">Total Price</p>
                  <p className="text-4xl font-bold text-gradient">
                    {formatPrice(selectedProperty.totalPrice)}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Key Features & Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProperty.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProperty.zoning && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Zoning Information</h3>
                    <Badge className="glow-blue text-sm px-3 py-1">
                      {selectedProperty.zoning}
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
                        <p className="text-foreground font-medium">{selectedProperty.contactEmail}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card/50 rounded-md border border-border">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="text-foreground font-medium">{selectedProperty.contactPhone}</p>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
