import products from "../Data/products.json";

import ProductSection from "../components/global/ProductSection";
import ProductSEO from "../components/products/ProductSEO";
import ProductSpecification from "../components/products/ProductSpecification";
import ProductView from "../components/products/ProductView";

const Product = () => {
  return (
    <>
      <ProductSEO />

      <main className="flex flex-col gap-16 mt-14">
        <ProductView />
        {/* Product Specification section */}
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
