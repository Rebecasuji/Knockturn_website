import IndustryCard from '../IndustryCard';
import { Building2, Cpu, ShoppingCart, Construction } from 'lucide-react';

export default function IndustryCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      <IndustryCard
        icon={Building2}
        title="Real Estate"
        description="Comprehensive property management solutions for residential, commercial, and investment portfolios."
        index={0}
      />
      <IndustryCard
        icon={Cpu}
        title="Technology"
        description="Modern office spaces and tech parks designed for innovation and collaboration."
        index={1}
      />
      <IndustryCard
        icon={ShoppingCart}
        title="Retail"
        description="Prime retail locations with high footfall and exceptional business potential."
        index={2}
      />
      <IndustryCard
        icon={Construction}
        title="Infrastructure"
        description="Large-scale infrastructure projects with sustainable development practices."
        index={3}
      />
    </div>
  );
}
