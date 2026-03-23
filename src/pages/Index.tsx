import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CollectionSection from "@/components/CollectionSection";
import ManifestoSection from "@/components/ManifestoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductGrid />
      <CollectionSection />
      <ManifestoSection />
      <Footer />
    </div>
  );
};

export default Index;
