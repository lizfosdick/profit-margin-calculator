import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import Textfield from "./Textfield";
import Outcome from "./Outcome";

function Calculator() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-13 mt-16 lg:mx-0 lg:flex lg:max-w-none">
      <div className="px-4 py-6 md:p-8 sm:p-10 lg:flex-auto">
        <form method="POST" autoComplete="off" className="space-y-8 w-full">
          <Currency activeCurrency="USD" onCurrency={() => console.log(1)} />
          <Textfield
            label="Cost of Item"
            name="costOfItem"
            currency="USD"
            onChange={() => console.log(1)}
            onBlur={() => console.log(1)}
          />
          <Textfield
            label="Markup"
            name="markup"
            onChange={() => console.log(1)}
            onBlur={() => console.log(1)}
          />

          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8">
            <button type="submit" className="btn btn-primary flex-2">Calculate</button>
            <button type="button" className="btn btn-secondary flex-1">Reset</button>
          </div>
        </form>
      </div>

      <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-lg lg:flex-shrink-0">OutCome</div>
      <div className="rounded-2xl bg-gray-50 dark:bg-black text-center ring-1 ring-inset ring-gray-900/5 dark:ring-fray-700 lg:flex lg:flex-col lg:justify-center py-8">
        <div className="space-y-8">
          <Outcome label="Sale Price" value={0} currency="USD" withDivider />
          <Outcome label="Profit" value={0} currency="USD" withDivider />
          <Outcome label="Gross Margin" value={0} currency="%" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
