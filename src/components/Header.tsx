import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="editorial-nav-link md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#poltronas" className="editorial-nav-link">Poltronas</a>
            <a href="#cadeiras" className="editorial-nav-link">Cadeiras</a>
            <a href="#colecoes" className="editorial-nav-link">Coleções</a>
          </nav>

          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="editorial-heading text-xl md:text-2xl tracking-[0.3em]">
              FORMA
            </h1>
          </a>

          <div className="flex items-center gap-5">
            <button className="editorial-nav-link" aria-label="Buscar">
              <Search size={16} />
            </button>
            <button className="editorial-nav-link relative" aria-label="Sacola">
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6">
          <nav className="flex flex-col gap-6">
            <a href="#poltronas" className="editorial-heading text-3xl" onClick={() => setMenuOpen(false)}>Poltronas</a>
            <a href="#cadeiras" className="editorial-heading text-3xl" onClick={() => setMenuOpen(false)}>Cadeiras</a>
            <a href="#colecoes" className="editorial-heading text-3xl" onClick={() => setMenuOpen(false)}>Coleções</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
