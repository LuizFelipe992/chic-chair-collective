const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
        <div>
          <h3 className="editorial-heading text-lg tracking-[0.3em] mb-6">FORMA</h3>
          <p className="editorial-body text-muted-foreground">
            Design de mobiliário para espaços que inspiram.
          </p>
        </div>

        <div>
          <p className="editorial-subheading mb-4">Loja</p>
          <nav className="flex flex-col gap-3">
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Poltronas</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Cadeiras</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Coleções</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Novidades</a>
          </nav>
        </div>

        <div>
          <p className="editorial-subheading mb-4">Empresa</p>
          <nav className="flex flex-col gap-3">
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Showroom</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Contato</a>
            <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
          </nav>
        </div>

        <div>
          <p className="editorial-subheading mb-4">Newsletter</p>
          <p className="editorial-body text-muted-foreground mb-4">
            Receba novidades e lançamentos exclusivos.
          </p>
          <div className="flex border-b border-foreground">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 bg-transparent editorial-body py-2 outline-none placeholder:text-muted-foreground"
            />
            <button className="editorial-subheading px-2 py-2">→</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
        <p className="editorial-body text-muted-foreground">© 2026 FORMA. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">Pinterest</a>
          <a href="#" className="editorial-body text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
