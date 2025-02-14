import Container from "../global/Container";
import { RelatedProductCard } from "../ui/RelatedProductCard";
import ProductMainView from "./ProductMainView";
import useIsMobile from "./../../hook/useIsMobile";

const ProductView = ({ products }) => {
  const isMobile = useIsMobile(1024);
  return (
    <Container>
      <section className="flex space-x-4 w-full">
        <ProductMainView />

        {!isMobile && (
          <aside>
            <h2 className="text-lg font-semibold text-gray-800 bg-white p-4 border border-gray/20 shadow-sm">
              Related Products
            </h2>
            <div className="flex flex-col space-y-1">
              {products?.slice(0, 4).map((product) => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </div>
          </aside>
        )}
      </section>
    </Container>
  );
};

export default ProductView;
