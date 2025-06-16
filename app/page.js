//const breaker = {};

import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  return products;
}

export default function Home() {
  const products = getProducts();
  console.log(products);

  return (
    <>
      <ImageBanner />
      <section>
        <Products />
      </section>
    </>
  );
}
