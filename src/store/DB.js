import { create } from "zustand";
import AllCategories from "../Data/category.json";
import AllProducts from "../Data/allProducts.json";
import AllBrands from "../Data/brand.json";

const useDBStore = create((set, get) => ({
  products: AllProducts,
  categories: AllCategories,
  brands: AllBrands,
  selectedProduct: null,

  getProductsByCategoryType: (categoryId, count) => {
    const filteredProducts = get().products.filter(
      (product) => product?.category?.categoryTypeId === categoryId
    );
    return count ? filteredProducts.slice(0, count) : filteredProducts;
  },

  getProductsByRating: (max, min, count) => {
    const filteredProducts = get().products.filter(
      (product) => product?.rating >= min && product?.rating <= max
    );
    return count ? filteredProducts?.slice(0, count) : filteredProducts;
  },

  getProductById: (id) => {
    const product = get().products?.find((product) => product._id === id);
    set({ selectedProduct: product });
  },

  getLatestProducts: (count) => {
    const products = get().products.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return count ? products.slice(0, count) : products;
  },
}));

export default useDBStore;
