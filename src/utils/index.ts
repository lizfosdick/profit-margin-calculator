export function format(value: any, currency: string | undefined) {
  const formattedValue = Math.round(Number(value) * 100) / 100;

  if (currency && currency !== "%") {
    return formattedValue.toLocaleString("en-US", {
      currency,
      style: "currency",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }

  return formattedValue.toLocaleString();
}
