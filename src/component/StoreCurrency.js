const StoreCurrency = ({ currencyData }) => {
  if (!currencyData || currencyData.error) {
    return (
      <section className="py-6">
        <h2 className="text-2xl font-semibold">Part 3</h2>
        <p>Currency not available</p>
      </section>
    );
  }

  return (
    <section className="py-6">
      <h2 className="text-4xl font-semibold text-center">Part 3</h2>
      <p>
        <strong>Store Currency:</strong> {currencyData.currency}
      </p>
    </section>
  );
};

export default StoreCurrency;
