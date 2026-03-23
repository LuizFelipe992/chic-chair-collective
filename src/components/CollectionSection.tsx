import livingImage from "@/assets/collection-living.jpg";
import diningImage from "@/assets/collection-dining.jpg";

const CollectionSection = () => {
  return (
    <section id="colecoes" className="py-20 md:py-32">
      <div className="px-6 md:px-10 mb-12 md:mb-16">
        <p className="editorial-subheading text-muted-foreground mb-2">Ambientes</p>
        <h2 className="editorial-heading text-3xl md:text-5xl">Coleções</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-6 md:px-10">
        <a href="#" className="group relative block overflow-hidden">
          <img
            src={livingImage}
            alt="Coleção Living"
            loading="lazy"
            width={1200}
            height={1500}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/15 transition-colors duration-500" />
          <div className="absolute bottom-8 left-8">
            <p className="editorial-subheading text-background/70 mb-1">Coleção</p>
            <h3 className="editorial-heading text-3xl md:text-4xl text-background">Living</h3>
          </div>
        </a>

        <a href="#" className="group relative block overflow-hidden">
          <img
            src={diningImage}
            alt="Coleção Dining"
            loading="lazy"
            width={1200}
            height={1500}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/15 transition-colors duration-500" />
          <div className="absolute bottom-8 left-8">
            <p className="editorial-subheading text-background/70 mb-1">Coleção</p>
            <h3 className="editorial-heading text-3xl md:text-4xl text-background">Dining</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CollectionSection;
