import Stripe from "stripe";
import "../../../envConfig.js";

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY); // Initialize Stripe with the secret key

export async function GET() {
  try {
    // Fetch all active products from Stripe
    const products = await stripe.products.list({ active: true });

    // fetch all the prices
    const prices = await stripe.prices.list({ active: true });

    // combine products and prices
    const combinedData = products.data.map((product) => {
      const productPrices = prices.data.filter((price) => {
        return price.product === product.id;
      });
      return {
        ...product,
        prices: productPrices.map((price) => {
          return {
            id: price.id,
            unit_amount: price.unit_amount,
            currency: price.currency,
            recurring: price.recurring,
          };
        }),
      };
    });

    // send the combined data as JSON response

    return Response.json(combinedData);
  } catch (error) {
    console.error("error fetching data from Stripe:", error.message);
    return Response.json({ error: "Failed to fetch data from Stripe" });
  }
}
