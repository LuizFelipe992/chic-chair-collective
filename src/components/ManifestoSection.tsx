const ManifestoSection = () => {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="editorial-subheading text-muted-foreground mb-6">Manifesto</p>
        <h2 className="editorial-heading text-2xl md:text-4xl lg:text-5xl leading-relaxed mb-8">
          Cada peça é uma declaração silenciosa de que o design pode ser sentido antes de ser compreendido.
        </h2>
        <p className="editorial-body text-muted-foreground max-w-xl mx-auto mb-10">
          Selecionamos poltronas e cadeiras que transcendem a funcionalidade. São objetos de desejo para arquitetos e designers de interiores que entendem que o mobiliário define o caráter de um espaço.
        </p>
        <button className="editorial-button">
          Nossa história
        </button>
      </div>
    </section>
  );
};

export default ManifestoSection;
