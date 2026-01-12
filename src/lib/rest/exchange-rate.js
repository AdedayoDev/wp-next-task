import "server-only";

const EXCHANGE_RATE_URL =
  "https://api.exchangerate.host/latest?base=NGN&symbols=USD";

export const getExchangeRate = async () => {
  try {
    const res = await fetch(EXCHANGE_RATE_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch exchange rate: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.rates?.USD) {
      throw new Error("Invalid exchange rate response");
    }

    return {
      base: data.base,
      rate: data.rates.USD,
      date: data.date,
    };
  } catch (error) {
    console.error("Exchange rate error:", error.message);

    return {
      error: true,
      message: "Unable to fetch exchange rate at this time.",
    };
  }
};
