import PropertyCard from '../PropertyCard';

export default function PropertyCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <PropertyCard
        id={1}
        name="Premium Industrial Warehouse Complex"
        city="Chennai"
        submarket="Ambattur Industrial Estate"
        squareFootage={50000}
        pricePerSqFt={4500}
        totalPrice={225000000}
        status="available"
        highlights={[
          "High ceiling clearance (40ft)",
          "Loading docks with hydraulic lifts",
          "Three-phase power supply"
        ]}
        contactEmail="sales@knockturn.com"
        contactPhone="+91 XXX XXX XXXX"
        index={0}
        onViewDetails={() => console.log('View details clicked')}
      />
      <PropertyCard
        id={2}
        name="Modern Manufacturing Facility"
        city="Chennai"
        submarket="Sriperumbudur"
        squareFootage={85000}
        pricePerSqFt={3800}
        totalPrice={323000000}
        status="under-offer"
        highlights={[
          "Heavy-duty flooring",
          "Overhead crane system",
          "Ample parking space"
        ]}
        contactEmail="sales@knockturn.com"
        contactPhone="+91 XXX XXX XXXX"
        index={1}
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
