import { type Pet } from './pet-interface'
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

export interface OngsRepository {
  create: (data: OngRequestValues) => Promise<Ong>
  getAllPets: (city: string) => Promise<Pet>
  findById: (id: string) => Promise<Ong | null | undefined>
}
