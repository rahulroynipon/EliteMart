import Container from "../global/Container";
import { RelatedProductCard } from "../ui/RelatedProductCard";
import ProductMainView from "./ProductMainView";
import useIsMobile from "./../../hook/useIsMobile";
import product from "../../Data/productDetails.json";

const ProductView = () => {
  const isMobile = useIsMobile(1024);
  return (
    <Container>
      <section className="flex space-x-4 w-full">
        <ProductMainView product={product} />

        {isMobile ? null : (
          <div className="w-1/2 space-y-1">
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </div>
        )}
      </section>
    </Container>
  );
};

export default ProductView;
