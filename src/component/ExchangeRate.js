const ExchangeRate = ({ exchangeRate }) => {
  if (!exchangeRate || exchangeRate.error) {
    return <p>Exchange rate unavailable.</p>;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
        <h1 className="text-4xl py-6 text-center">Part 2</h1>
      <h4>Exchange Rate</h4>
      <p>
        1 {exchangeRate.base} = {exchangeRate.rate} USD
      </p>
      <small>As of {exchangeRate.date}</small>
    </div>
  );
};

export default ExchangeRate;
