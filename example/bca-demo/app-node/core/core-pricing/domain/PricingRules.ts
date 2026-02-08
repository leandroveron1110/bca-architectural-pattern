import { CalculatePriceInput, PriceRange } from "../input/CalculatePriceInput";
import { PriceSignal } from "../signal/PriceSignal";

export function calculatePrice(
  distanceKm: number,
  minimumPrice: number,
  ranges: PriceRange[]
): number | null {
  if (distanceKm <= 2) return minimumPrice;

  const range = ranges.find(r => distanceKm > r.fromKm && distanceKm <= r.toKm);
  if (!range) return null; // El dominio no decide cómo reportar el error, solo da el resultado

  return minimumPrice + distanceKm * range.pricePerKm;
}

// core-pricing/service/CalculatePriceService.ts
export function calculatePriceService(input: CalculatePriceInput): PriceSignal {
  const amount = calculatePrice(input.distanceKm, input.minimumPrice, input.ranges);

  if (amount === null) {
    return { type: 'DISTANCE_NOT_SUPPORTED', distance: input.distanceKm };
  }

  return { type: 'PRICE_CALCULATED', amount };
}