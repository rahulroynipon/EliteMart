const ProductSummary = () => {
  return (
    <div className="p-2 md:p-4 bg-white">
      <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
        Product Summary
      </h2>

      <p className="text-gray-600 text-sm md:text-base mb-3">
        This product is designed to provide the best quality and performance. It
        comes with advanced features to enhance user experience and durability.
      </p>

      <h3 className="md:text-lg font-medium text-gray-700 mb-2">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
        <li>✅ High-quality materials for long-lasting durability</li>
        <li>✅ Advanced technology for enhanced performance</li>
        <li>✅ Sleek and modern design for a premium look</li>
        <li>✅ Lightweight and ergonomic for maximum comfort</li>
        <li>✅ Energy-efficient and eco-friendly</li>
      </ul>

      <h3 className="md:text-lg font-medium text-gray-700 mt-4 mb-2">
        Usage & Benefits:
      </h3>
      <p className="text-gray-600  text-sm md:text-base">
        Perfect for both personal and professional use, this product offers ease
        of use, reliable performance, and a great user experience. Whether you
        need it for everyday tasks or specialized applications, it ensures
        efficiency and satisfaction.
      </p>
    </div>
  );
};

export default ProductSummary;
