import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // updated structure
      })
      .catch((error) => {
        console.error("Failed to fetch currency data:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
