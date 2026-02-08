export type PriceRange = {
  fromKm: number;
  toKm: number;
  pricePerKm: number;
};

export type CalculatePriceInput = {
  distanceKm: number;
  minimumPrice: number;
  ranges: PriceRange[];
};
