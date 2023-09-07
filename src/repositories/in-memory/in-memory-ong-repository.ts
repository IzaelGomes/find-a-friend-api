import { type Ong, type OngsRepository } from '../interfaces/ong-interface'
import { type Pet } from '../interfaces/pet-interface'
import { randomUUID } from 'node:crypto'

export class InMemoryOngRepository implements OngsRepository {
  public onganization: Ong[] = []

  async create (data: Ong): Promise<Ong> {
    const ong = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      cep: data.cep,
      adress: data.adress,
      state: data.state,
      city: data.city,
      password: data.password,
      createdAt: data.createdAt
    }

    this.onganization.push(ong)

    return ong
  }

  async getAllPets (city: string): Promise<Pet> {
    throw new Error('Method not implemented.')
  }

  async findById (id: string): Promise<Ong | undefined> {
    const ongFound = this.onganization.find((ong) => ong.id === id)

    return ongFound
  }
}