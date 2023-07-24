export interface Admin {
  userId: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  age: number;
  address: {
    streetAddress: string;
    city: string;
    state: string;
  };
}
