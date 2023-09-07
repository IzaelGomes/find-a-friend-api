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
export interface getOnData extends Ong {
  pet?: Pet[]
}

export interface OngsRepository {
  create: (data: Ong) => Promise<Ong>
  getAllPets: (city: string) => Promise<Pet>
  findById: (id: string) => Promise<Ong | undefined>
}
