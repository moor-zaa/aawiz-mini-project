export type Gender = "female" | "male";
export type EyeColor =
  | "Green"
  | "Red"
  | "Blue"
  | "Hazel"
  | "Violet"
  | "Brown"
  | "Amber"
  | "Gray";

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: EyeColor;
}
