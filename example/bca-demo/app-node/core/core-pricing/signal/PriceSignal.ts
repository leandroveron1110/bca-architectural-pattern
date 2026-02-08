export type PriceCalculated = { type: 'PRICE_CALCULATED'; amount: number | null};
export type PriceDistanceNotSupported = {
  type: 'DISTANCE_NOT_SUPPORTED';
  distance: number | null;
};

export type PriceSignal = PriceCalculated | PriceDistanceNotSupported;
