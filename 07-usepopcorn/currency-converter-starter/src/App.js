// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (amount === "") {
      setConvertedAmount("");
      return;
    } else if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }
    const controller = new AbortController();
    async function convert() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setConvertedAmount(data.rates[toCurrency]);
        setLoading(false);
      } catch (error) {
      } finally {
      }
    }
    convert();
    return () => {
      controller.abort();
    };
  }, [amount, fromCurrency, toCurrency]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{loading ? "Loading..." : convertedAmount}</p>
    </div>
  );
}
