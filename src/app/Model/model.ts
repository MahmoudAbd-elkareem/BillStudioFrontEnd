export interface User {
  name: string,
  phoneNumber: number,
  city: string,
  country: string,
  email: string,
  gender: string,
  studios : studio[]
}

export interface studio{
  studioType: string,
  adress: string
}
