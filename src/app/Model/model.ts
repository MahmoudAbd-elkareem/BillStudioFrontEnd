export class User {
  name: string;
  phoneNumber: number;
  city: string;
  country: string;
  email: string;
  studioName: string;
  gender: string;
  studios : studio[]
}

export class studio{
  studioType: string;
  adress: string
}
