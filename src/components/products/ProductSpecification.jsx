import { useState } from "react";
import Container from "../global/Container";
import cn from "../../utils/cn";
import ProductSummary from "./ProductSummary";
import ProductReview from "./ProductReview";
import ProductQuestion from "./ProductQuestion";

const tabs = [
  { id: "summary", label: "Summary" },
  { id: "reviews", label: "Reviews (0)" },
  { id: "questions", label: "Ask Question (0)" },
];

const ProductSpecification = () => {

  
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <Container>
      <section className="py-6 w-full bg-white px-5 border border-gray/35">
        <h1 className="text-base md:text-xl text-gray-700 font-semibold mb-6">
          Product Specification & Summary
        </h1>

        {/* Tabs */}
        <div>
          <ul className="flex justify-between md:justify-start border-b border-primary pb-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "cursor-pointer text-sm md:text-base pb-1 transition-colors md:w-36",
                  activeTab === tab.id
                    ? "text-primary font-bold"
                    : "text-gray-600"
                )}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-4">
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              activeTab === "summary"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <ProductSummary />
          </div>
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              activeTab === "reviews"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <ProductReview />
          </div>
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              activeTab === "questions"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <ProductQuestion />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ProductSpecification;
