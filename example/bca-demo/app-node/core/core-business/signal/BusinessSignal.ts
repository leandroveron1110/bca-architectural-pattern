export type BusinessAccepted = {
  type: 'BUSINESS_ACCEPTED';
};

export type BusinessRejected = {
  type: 'BUSINESS_REJECTED';
  reason: string;
};

export type BusinessSignal = BusinessAccepted | BusinessRejected;
