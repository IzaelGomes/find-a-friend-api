import { type Age, type Size, type Independent } from './pet-interface'
export interface responseOngData {
  id?: string
  name: string
  email: string
  cep: string
  adress: string
  state: string
  city: string
  createdAt: Date
  password: string
}

export interface requestOngData {
  id?: string
  name: string
  email: string
  cep: string
  adress: string
  state: string
  city: string
  createdAt: Date
  password: string
}

export type OngRequestValues = Omit<responseOngData, 'createdAt'>
export interface ResponseGetPetsByAndress {
  ong: PetObject[]
}

export interface PetObject {
  Pet: responseOngData[]
}
export interface OngsRepository {
  create (data: OngRequestValues): Promise<responseOngData>
  getPetsByAndress(city: string, state: string, age: Age | undefined, energy: number | undefined, independent: Independent | undefined, size: Size | undefined): Promise<ResponseGetPetsByAndress>
  findById: (id: string) => Promise<requestOngData | null | undefined>
}
