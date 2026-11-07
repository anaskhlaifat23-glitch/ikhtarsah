// Single place to add the Amazon.sa Associates tracking ID once the account exists.
export const AMAZON_TAG = '';

export function amzProduct(asin: string): string {
  const base = `https://www.amazon.sa/dp/${asin}`;
  return AMAZON_TAG ? `${base}?tag=${AMAZON_TAG}` : base;
}

export function amzSearch(query: string): string {
  const base = `https://www.amazon.sa/s?k=${encodeURIComponent(query)}`;
  return AMAZON_TAG ? `${base}&tag=${AMAZON_TAG}` : base;
}
