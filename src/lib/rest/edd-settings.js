import "server-only";

const baseURL = process.env.WORDPRESS_URL;

if (!baseURL) {
  throw new Error("WORDPRESS_URL is not defined");
}

export async function getStoreCurrency() {
  try {
    const res = await fetch(
      `${baseURL}/wp-json/custom/v1/edd-currency`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch currency: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.currency) {
      throw new Error("Currency missing in response");
    }

    return {
      currency: data.currency,
    };
  } catch (error) {
    console.error("Currency fetch error:", error.message);
    return {
      error: true,
    };
  }
}
