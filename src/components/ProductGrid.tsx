import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { id: 1, name: "Poltrona Arco", price: "R$ 12.490", image: product1, category: "Poltronas" },
  { id: 2, name: "Cadeira Asa", price: "R$ 4.890", image: product2, category: "Cadeiras" },
  { id: 3, name: "Poltrona Veludo Esmeralda", price: "R$ 8.790", image: product3, category: "Poltronas" },
  { id: 4, name: "Cadeira Scultura", price: "R$ 15.900", image: product4, category: "Cadeiras" },
  { id: 5, name: "Poltrona Nuvem", price: "R$ 11.200", image: product5, category: "Poltronas" },
  { id: 6, name: "Cadeira Bertoia Retrô", price: "R$ 6.350", image: product6, category: "Cadeiras" },
];

const ProductGrid = () => {
  return (
    <section id="poltronas" className="px-6 md:px-10 py-20 md:py-32">
      <div className="mb-12 md:mb-16">
        <p className="editorial-subheading text-muted-foreground mb-2">Curadoria</p>
        <h2 className="editorial-heading text-3xl md:text-5xl">Peças Selecionadas</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-16">
        {products.map((product) => (
          <a key={product.id} href="#" className="group cursor-pointer block">
            <div className="overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={800}
                height={1056}
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="editorial-subheading text-muted-foreground mb-1">{product.category}</p>
            <h3 className="editorial-body text-foreground mb-1">{product.name}</h3>
            <p className="editorial-price text-foreground">{product.price}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
