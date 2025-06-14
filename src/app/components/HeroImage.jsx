import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex justify-center items-center w-full h-72 md:h-96">
      <Image
        src="/hero.jpg"
        alt="Hero Illustration"
        width={400}
        height={300}
        className="rounded-3xl object-cover shadow-lg"
        priority
      />
    </div>
  );
} 