import ServiceCard from '../ServiceCard';
import { Building2 } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <ServiceCard
        icon={Building2}
        title="Commercial Property"
        description="Premium commercial real estate solutions with strategic locations and modern amenities for your business growth."
        index={0}
      />
      <ServiceCard
        icon={Building2}
        title="Residential Property"
        description="Elegant residential properties designed for comfort, luxury, and sustainable living in prime locations."
        index={1}
      />
      <ServiceCard
        icon={Building2}
        title="Investment Property"
        description="Strategic investment opportunities with high ROI potential and expert guidance for portfolio growth."
        index={2}
      />
    </div>
  );
}
