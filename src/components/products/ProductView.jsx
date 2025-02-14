import Container from "../global/Container";
import { RelatedProductCard } from "../ui/RelatedProductCard";
import ProductMainView from "./ProductMainView";
import useIsMobile from "./../../hook/useIsMobile";

const ProductView = ({ products }) => {
  const isMobile = useIsMobile(1024);
  return (
    <Container>
      <section className="flex space-x-4 w-full">
        <div className="w-[calc(100%-23rem)]">
          <ProductMainView />
        </div>

        {!isMobile && (
          <aside className="w-[23rem] shrink-0">
            <h2 className="text-lg font-semibold text-gray-800 bg-white p-4 border border-gray/20 shadow-sm">
              Related Products
            </h2>
            <div className="flex flex-col space-y-1">
              {products?.length > 0 ? (
                products
                  ?.slice(0, 5)
                  .map((product) => (
                    <RelatedProductCard key={product._id} product={product} />
                  ))
              ) : (
                <div className=" bg-white h-[15rem] flex items-center justify-center">
                  <p className="text-gray-600">No related products found</p>
                </div>
              )}
            </div>
          </aside>
        )}
      </section>
    </Container>
  );
};

export default ProductView;
