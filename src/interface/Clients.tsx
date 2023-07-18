export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  gender: string;
  country: string;
  address: string;
}

export enum Gender {
  Male = 1,
  Female = 2,
}
