const ProductQuestion = () => {
  return (
    <div className="h-20 flex flex-col items-center justify-center w-full text-gray-600">
      <p className="md:text-lg">No questions available.</p>
      <button
        className="mt-2 text-sm text-primary hover:underline focus:outline-none"
        aria-label="Ask a question"
      >
        Be the first to ask!
      </button>
    </div>
  );
};

export default ProductQuestion;
