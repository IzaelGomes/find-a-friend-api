import { type Age, type Size, type Independent } from './pet-interface'
export interface responseOngData {
  id: string
  name: string
  email: string
  cep: string
  adress: string
  state: string
  city: string
  phone: string | null
  createdAt: Date
  password: string
}

export interface requestOngData {
  name: string
  email: string
  cep: string
  phone: string | null
  adress: string
  state: string
  city: string
  password: string
}
export interface ResponseGetPetsByAndress {
  ong: PetObject[]
}

export interface PetObject {
  Pet: responseOngData[]
}
export interface OngsRepository {
  create (data: requestOngData): Promise<responseOngData>
  getPetsByAndress(city: string, state: string, age: Age | undefined, energy: number | undefined, independent: Independent | undefined, size: Size | undefined): Promise<ResponseGetPetsByAndress | null>
  findById (id: string): Promise<requestOngData | null >
  findOngByEmail(email: string): Promise<responseOngData | null>
}
