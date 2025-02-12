import React from "react";
import { StarRating } from "../ui/StarRating";
const ProductReview = () => {
  const ratings = [
    { label: "5 star", percentage: 70, color: "bg-green-500" },
    { label: "4 star", percentage: 50, color: "bg-blue-500" },
    { label: "3 star", percentage: 30, color: "bg-cyan-400" },
    { label: "2 star", percentage: 15, color: "bg-orange-400" },
    { label: "1 star", percentage: 40, color: "bg-red-500" },
  ];

  return (
    <div className="p-5">
      <h3 className="text-base md:text-xl font-semibold text-gray-700 mb-4">
        Product Rating
      </h3>
      <StarRating rating={0} />

      <p className="mt-1 text-sm text-gray-600">
        0 average based on 0 reviews.
      </p>

      <div className="my-6 border-t border-gray-300"></div>

      {ratings.map((rating) => (
        <div key={rating.label} className="flex items-center mt-3">
          <span className="w-12 text-sm font-medium text-gray-700">
            {rating.label}
          </span>

          <div className="flex-1 mx-2 bg-gray-200">
            <div
              className={`h-5 md:h-8 ${rating.color}`}
              style={{ width: `${rating.percentage}%` }}
            ></div>
          </div>

          <span className="text-sm font-medium text-gray-700">0</span>
        </div>
      ))}
    </div>
  );
};

export default ProductReview;
