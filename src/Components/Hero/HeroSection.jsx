import MixedBounceCards from './MixedBounceCards';

export default function HeroSection() {
  const mixedCards = [
    {
      type: 'text',
      bgColor: 'bg-[#2B79FB]',
      textColor: '#000',
      title: '10M+',
      subtitle: 'Organische views',
      desc: 'Groei door slimme content',
    },
    {
      type: 'video',
      content: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
    },
    {
      type: 'text',
      bgColor: 'bg-[#31D18A]',
      textColor: '#000',
      title: '30+',
      subtitle: 'Merken geholpen',
      desc: 'Van start-up tot multinational',
    },
    {
      type: 'video',
      content: 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4',
    },
  ];

  // These rotations give the "messy" card look from Image 2
  const customTransformStyles = [
    'rotate(-15deg)',
    'rotate(10deg)',
    'rotate(-8deg)',
    'rotate(11deg)',
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F9F6F0] py-20">
      <MixedBounceCards
        cardsContent={mixedCards}
        transformStyles={customTransformStyles}
        animationStagger={0.15}
        containerWidth="100%"
        containerHeight={500}
      />
    </div>
  );
}