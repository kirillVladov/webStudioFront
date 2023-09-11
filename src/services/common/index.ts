import { Currency, CurrencySymbol } from "../../../types/tasks";

export function scrollWindowByHeight(height: number) {
  window.scrollTo({ top: height, behavior: "smooth" });
}

export function prepareCurrencyToSymbol(text: Currency): string {
  const currencyList: { type: Currency; char: CurrencySymbol }[] = [
    { type: "usd", char: CurrencySymbol.usd },
    { type: "eur", char: CurrencySymbol.eur },
    { type: "rub", char: CurrencySymbol.rub },
  ];

  const currentCurrency = currencyList.find(({ type }) => text === type);

  if (!currentCurrency) return text;

  return currentCurrency.char;
}
