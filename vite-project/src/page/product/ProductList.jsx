import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

import { ProductFilter } from "./ProductFilter";
import Spinner from "../../components/Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category,
      );

      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error(error);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner size="xl" />;
      </div>
    );
  }

  if (error) {
    return <div>Error has happened: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center mb-8">
        <ProductFilter onFilter={handleFilter} />
      </div>

      <h1 className="text-3xl font-bold text-gray-900">Products Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
