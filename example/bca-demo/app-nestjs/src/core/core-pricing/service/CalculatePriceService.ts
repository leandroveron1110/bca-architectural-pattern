import { calculatePrice } from '../domain/PricingRules';
import { CalculatePriceInput } from '../input/CalculatePriceInput';
import { PriceCalculated } from '../signal/PriceSignal';

export function calculatePriceService(
  input: CalculatePriceInput,
): PriceCalculated {
  return {
    type: 'PRICE_CALCULATED',
    amount: calculatePrice(input.distanceKm, input.minimumPrice, input.ranges),
  };
}
