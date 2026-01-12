const BASE_URL = process.env.WORDPRESS_URL;

export async function submitName(name) {
  const res = await fetch(
    `${BASE_URL}/wp-json/custom/v1/submit-name`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to submit name");
  }

  return res.json();
}

export async function getName() {
  const res = await fetch(
    `${BASE_URL}/wp-json/custom/v1/get-name`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to get name");
  }

  return res.json();
}
