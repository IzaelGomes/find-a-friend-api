import { type Age, type Size, type Pet, type Independent } from './pet-interface'
export interface Ong {
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

export type OngRequestValues = Omit<Ong, 'createdAt'>
export interface getOnData extends Ong {
  pet?: Pet[]
}

export interface ResponseGetPetsByAndress {
  ong: PetObject[]
}

export interface PetObject {
  Pet: Pet[]
}
export interface OngsRepository {
  create (data: OngRequestValues): Promise<Ong>
  getPetsByAndress(city: string, state: string, age: Age | undefined, energy: number | undefined, independent: Independent | undefined, size: Size | undefined): Promise<ResponseGetPetsByAndress>
  findById: (id: string) => Promise<Ong | null | undefined>
}
