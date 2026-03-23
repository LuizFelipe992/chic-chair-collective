import heroImage from "@/assets/hero-chair.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Poltrona de design em ambiente minimalista"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/10" />
      <div className="absolute bottom-12 left-6 md:bottom-20 md:left-10">
        <p className="editorial-subheading text-background mb-3">Coleção 2026</p>
        <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-background mb-6">
          Silêncio<br />& Forma
        </h2>
        <a href="#colecoes" className="editorial-button border-background/80 text-background hover:bg-background hover:text-foreground">
          Explorar
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
