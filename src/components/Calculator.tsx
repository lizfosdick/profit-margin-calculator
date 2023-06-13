import React, { useState, useEffect } from "react";
import Currency from "./Currency";

function Calculator() {

  return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-13 mt-16 lg:mx-0 lg:flex lg:max-w-none">
      <div className="px-4 py-6 md:p-8 sm:p-10 lg:flex-auto">
        <form method="POST" autoComplete="off" className="space-y-8 w-full">
          <Currency />
        </form>
      </div>
    </div>
  );
}

export default Calculator;
