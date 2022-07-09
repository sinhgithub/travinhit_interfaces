import IContact from "../contact";

export default interface IUser {
  id: string | number;
  code: string | number | null;
  createdAt: string;
  updatedAt: string;
  role: string; // member | admin | writer ....
  name: string;
  birth_day: string;
  age: string;
  contact: IContact;
}