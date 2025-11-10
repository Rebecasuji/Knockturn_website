import ClientStoryCard from '../ClientStoryCard';

export default function ClientStoryCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <ClientStoryCard
        name="Rajesh Kumar"
        role="CEO"
        company="Tech Innovations Pvt Ltd"
        testimonial="Knockturn transformed our office space with exceptional commercial property solutions. Their attention to detail and professional approach exceeded our expectations."
        index={0}
      />
      <ClientStoryCard
        name="Priya Sharma"
        role="Director"
        company="Sharma Enterprises"
        testimonial="The investment property guidance we received was outstanding. Knockturn's expertise helped us build a profitable real estate portfolio with confidence."
        index={1}
      />
    </div>
  );
}
