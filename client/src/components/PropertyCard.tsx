import { motion } from "framer-motion";
import { MapPin, Square, IndianRupee, Building2, CheckCircle2, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: number;
  name: string;
  city: string;
  submarket: string;
  squareFootage: number;
  pricePerSqFt: number;
  totalPrice: number;
  status: string;
  highlights: string[];
  contactEmail: string;
  contactPhone: string;
  index: number;
  onViewDetails: () => void;
}

export default function PropertyCard({
  name,
  city,
  submarket,
  squareFootage,
  pricePerSqFt,
  totalPrice,
  status,
  highlights,
  contactEmail,
  contactPhone,
  index,
  onViewDetails,
}: PropertyCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      data-testid={`card-property-${index}`}
    >
      <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all duration-300 overflow-visible hover-elevate">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2" data-testid={`text-property-name-${index}`}>
                {name}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span data-testid={`text-property-location-${index}`}>
                  {submarket}, {city}
                </span>
              </div>
            </div>
            <Badge
              className={`${
                status === "available"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              } glow-blue`}
              data-testid={`badge-status-${index}`}
            >
              {status === "available" ? "Available" : "Under Offer"}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 p-3 bg-card/50 rounded-md border border-border">
              <Square className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Area</p>
                <p className="font-semibold text-foreground" data-testid={`text-sqft-${index}`}>
                  {formatSqFt(squareFootage)} sq ft
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-card/50 rounded-md border border-border">
              <IndianRupee className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Rate/sq ft</p>
                <p className="font-semibold text-foreground" data-testid={`text-rate-${index}`}>
                  ₹{pricePerSqFt.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 p-3 bg-primary/10 border border-primary/30 rounded-md">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-primary" />
              <p className="text-xs text-primary font-medium">Total Price</p>
            </div>
            <p className="text-2xl font-bold text-gradient" data-testid={`text-total-price-${index}`}>
              {formatPrice(totalPrice)}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Key Highlights:</p>
            <ul className="space-y-1">
              {highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1 glow-blue hover:glow-blue-strong transition-all"
              onClick={onViewDetails}
              data-testid={`button-view-details-${index}`}
            >
              View Details
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="hover-elevate"
              onClick={() => window.location.href = `tel:${contactPhone}`}
              data-testid={`button-contact-${index}`}
            >
              <Phone className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="hover-elevate"
              onClick={() => window.location.href = `mailto:${contactEmail}`}
              data-testid={`button-email-${index}`}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
