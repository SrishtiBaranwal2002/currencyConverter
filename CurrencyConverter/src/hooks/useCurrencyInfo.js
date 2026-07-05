// hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Default state empty object rakhein

    useEffect(() => {
        // API response aane tak error se bachne ke liye logic
        fetch(`https://v6.exchangerate-api.com/v6/ea9ee2d5937c10a1c1611367/latest/USD`)
            .then((res) => res.json())
            .then((res) => {
                if (res.conversion_rates) setData(res.conversion_rates);
            })
            .catch((err) => console.error("API error:", err));
    }, [currency]);

    return data;
}
export default useCurrencyInfo;