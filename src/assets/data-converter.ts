import {NATIONAL_ABB, NATIONAL_COLOR, NationalColorData} from "./national-color";
import {ContactsType, DobType, LocationType} from "../redux/components/contacts/contacts-types";

export const convertFullName = (title: string, first: string, last: string): string =>
  `${title}. ${first} ${last}`;

export const convertLocation = (location: LocationType): string => {
  const { country, street, city, state, postcode } = location;
  return `/${country}/\n${street.number} ${street.name}, ${city}, ${state} ${postcode}`;
};

export const convertBirthday = (birthdayData: DobType): string => {
  const { age, date } = birthdayData;
  const dateObj = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateStr = dateObj.toLocaleDateString("en-US", option);
  return `${dateStr}\n${age} years`;
};

export interface GetFormateDataReturn {
  fullName: string,
  location: string,
  birthday: string,
  email: string,
  phone: string,
  national: string,
  nationalColor: NationalColorData,
}

export const getFormatedData = (data: ContactsType): GetFormateDataReturn => ({
  fullName: convertFullName(data.name.title, data.name.first, data.name.last),
  location: convertLocation(data.location),
  birthday: convertBirthday(data.dob),
  email: data.email,
  phone: data.phone,
  national: NATIONAL_ABB[data.nat],
  nationalColor: NATIONAL_COLOR.BR,
});
