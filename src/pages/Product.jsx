import { useParams } from "react-router";

import ProductSection from "../components/global/ProductSection";
import ProductSEO from "../components/products/ProductSEO";
import ProductSpecification from "../components/products/ProductSpecification";
import ProductView from "../components/products/ProductView";
import useDBStore from "../store/DB";
import { useEffect, useState } from "react";

const Product = () => {
  const [similarProducts, setSimilarProducts] = useState([]);

  const { type, category, id } = useParams();
  const { getProductsByCategoryType, getProductById } = useDBStore();

  useEffect(() => {
    if (id) getProductById(id);
  }, [id]);

  useEffect(() => {
    if (type) {
      const products = getProductsByCategoryType(type, 6);
      setSimilarProducts(products);
    }
  }, [type]);

  return (
    <>
      <ProductSEO />

      <main className="flex flex-col gap-16 mt-5 md:mt-14">
        <ProductView products={similarProducts} />
        {/* Product Specification section */}
        <ProductSpecification />
        {/*  Similar Category Best section*/}
        <ProductSection
          title="Similar Category Best"
          products={similarProducts}
          viewAllLink="/products"
        />
      </main>
    </>
  );
};

export default Product;
