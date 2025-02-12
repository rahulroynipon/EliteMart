import products from "../Data/products.json";

import ProductSection from "../components/global/ProductSection";
import ProductSEO from "../components/products/ProductSEO";
import ProductSpecification from "../components/products/ProductSpecification";

const Product = () => {
  return (
    <>
      <ProductSEO />
      <h1 className="text-red-500">Product</h1>

      <main className="flex flex-col gap-16">
        <ProductSpecification />

        {/*  Similar Category Best section*/}
        <ProductSection
          title="Similar Category Best"
          products={products}
          viewAllLink="/products"
        />
      </main>
    </>
  );
};

export default Product;
