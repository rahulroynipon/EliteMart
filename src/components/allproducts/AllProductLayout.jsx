import useDBStore from "../../store/DB";
import Container from "../global/Container";
import { ProductCard } from "../ui/ProductCard";

export const AllProductLayout = () => {
  const { products } = useDBStore();

  return (
    <Container className="flex flex-col lg:flex-row items-start space-x-4 lg:mt-16">
      <div className="lg:w-[20rem] lg:sticky lg:top-32 shrink-0 border h-24"></div>
      <div className="lg:w-[calc(100%-20rem)] grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </Container>
  );
};
