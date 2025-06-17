import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  return products;
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  let planner = null;
  let sticker = [];

  for (let product of products) {
    if (product.name === "Dragon And Knight Monthly Planner") {
      planner = products;
      continue;
    }
    sticker.push(product);
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
