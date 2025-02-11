import { ProductCard } from "../ui/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-5 px-5 items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedProducts;
