import React from "react";
import { CURRENCIES } from "../constants";

import { CurrencyProps } from "../types";

function Currency({ activeCurrency, onCurrency }: CurrencyProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
        Currency
      </label>
      {Object.keys(CURRENCIES).map((currency) => (
        <span
          key={currency}
          className={`chip ${currency === activeCurrency && 'active'}`}
          onClick={onCurrency(currency)}
        >
          {currency}
        </span>
      ))}
    </div>
  );
}

export default Currency;
