import { LocationType } from '../_enums/location-type';

export type LocationInformation = {
  [key in LocationType]: LocationDetails;
};

export type LocationDetails = AddressText | Coordinate;

export interface AddressText {
  extraInformation?: string;
  doorNumber?: string;
  apartmentNumber?: string;
  apartment?: string;
  street?: string;
  avenue?: string;
  neighbourhood: string;
  district: string;
  city: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}
