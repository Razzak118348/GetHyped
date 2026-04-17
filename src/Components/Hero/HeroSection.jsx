import MixedBounceCards from './MixedBounceCards';

export default function HeroSection() {
  const mixedCards = [
    // 1st Card: Text (Blue)
    {
      type: 'text',
      bgColor: 'bg-[#2B79FB]', // Your blue color
      textColor: '#000',
      title: '10M+',
      subtitle: 'Organische views',
      desc: 'Groei door slimme content',
    },
    // 2nd Card: Video (Salontopper)
    {
      type: 'video',
      content: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
    },
    // 3rd Card: Text (Green)
    {
      type: 'text',
      bgColor: 'bg-[#31D18A]', // Your green color
      textColor: '#000',
      title: '30+',
      subtitle: 'Merken geholpen',
      desc: 'Van start-up tot multinational',
    },
    // 4th Card: Video (Petrol Head)
    {
      type: 'video',
      content: 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4',
    },
  ];

  // Specific rotation and position for 4 cards to match the reference
  const customTransformStyles = [
    'rotate(8deg) translate(-210px, 10px)',
    'rotate(3deg) translate(-70px, -15px)',
    'rotate(-3deg) translate(70px, -5px)',
    'rotate(-8deg) translate(210px, 20px)',
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F9F6F0]">
      <MixedBounceCards
        className="custom-bounceCards"
        cardsContent={mixedCards}
        containerWidth="100%"
        containerHeight={500}
        animationDelay={0.5}
        animationStagger={0.1}
        easeType="elastic.out(1, 0.7)"
        transformStyles={customTransformStyles}
        enableHover={true}
      />
    </div>
  );
}