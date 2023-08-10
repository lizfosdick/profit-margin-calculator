import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import Currency from "./Currency";
import Textfield from "./Textfield";
import Outcome from "./Outcome";
import { initialFormState } from "../types";
import { formValidationSchema } from "../validations";

function Calculator() {
  const [form, setForm] = useState(initialFormState);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    touched,
    errors,
    values: { costOfItem, markup },
  } = useFormik({
    initialValues: {
      costOfItem: "",
      markup: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: ({ costOfItem, markup }) => {
      const calculatedProfit = (Number(costOfItem) * Number(markup)) / 100;
      const calculatedSalePrice = Number(costOfItem) + Number(calculatedProfit);
      const calculatedGrossMargin =
        (calculatedProfit / calculatedSalePrice) * 100;

      setForm({
        ...form,
        salePrice: calculatedSalePrice,
        profit: calculatedProfit,
        grossMargin: calculatedGrossMargin,
      });
    },
  });

  const { salePrice, profit, grossMargin, currency } = form;

  const onReset = () => {
    setForm({
      ...initialFormState,
      currency: localStorage?.currency,
    });
    resetForm();
  };

  const changeCurrency = (id: string) => {
    localStorage.currency = id;

    setForm({
      ...form,
      currency: id,
    });
  };

  const onCurrency = (id: string) => () => {
    changeCurrency(id);
  };

  useEffect(() => {
    if ("currency" in localStorage) {
      changeCurrency(localStorage.currency);
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-13 mt-16 lg:mx-0 lg:flex lg:max-w-none">
      <div className="px-4 py-6 md:p-8 sm:p-10 lg:flex-auto items-center flex">
        <form
          method="POST"
          autoComplete="off"
          className="space-y-8 w-full"
          onSubmit={handleSubmit}
        >
          <Currency activeCurrency={currency} onCurrency={onCurrency} />
          <Textfield
            label="Cost of Item"
            name="costOfItem"
            currency={currency}
            value={costOfItem}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.costOfItem && errors.costOfItem}
          />
          <Textfield
            label="Markup"
            name="markup"
            value={markup}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.costOfItem && errors.costOfItem}
          />

          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8">
            <button type="submit" className="btn btn-primary flex-2">
              Calculate
            </button>
            <button
              type="button"
              className="btn btn-secondary flex-1"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>


      <div className="rounded-2xl bg-gray-50 dark:bg-black text-center ring-1 ring-inset ring-gray-900/5 dark:ring-fray-700 lg:flex lg:flex-col lg:justify-center py-8">
        <div className="space-y-8">
          <Outcome
            label="Sale Price"
            value={salePrice}
            currency={currency}
            withDivider
          />
          <Outcome label="Profit" value={profit} currency={currency} withDivider />
          <Outcome label="Gross Margin" value={grossMargin} currency="%" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
