export default function HeroSec({ title }: { title: string }) {
  return (
    <div
      className="h-[23rem] w-full bg-black/50 bg-blend-overlay bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(./Hero.jpg)`,
      }}
    >
      <p className="flex justify-center items-center h-full text-white font-semibold text-4xl">
        {title}
      </p>
    </div>
  );
}
