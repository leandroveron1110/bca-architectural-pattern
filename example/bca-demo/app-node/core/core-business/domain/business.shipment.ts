export interface Location {
  lat: number;
  lng: number;
}

export interface Shipment {
  pickup: Location;
  dropoff: Location;
  vehicle: 'bici' | 'moto';
}
