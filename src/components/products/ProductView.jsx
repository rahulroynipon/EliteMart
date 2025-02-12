import Container from "../global/Container";
import { RelatedProductCard } from "../ui/RelatedProductCard";
import ProductMainView from "./ProductMainView";

const ProductView = () => {
  return (
    <Container>
      <section className="flex space-x-4 w-full">
        <ProductMainView />

        <div className="bg-white border border-gray/30 w-[30rem]">
          <h3 className="text-xl font-medium text-gray-800 mb-2 p-4">
            Related Product
          </h3>
          <div className="space-y-2">
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ProductView;
