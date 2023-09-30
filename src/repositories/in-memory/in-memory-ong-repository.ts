import { type requestOngData, type responseOngData, type OngsRepository, type ResponseGetPetsByAndress } from '../interfaces/ong-interface'

export class InMemoryOngRepository implements OngsRepository {
  public onganization: responseOngData[] = []

  async create (data: requestOngData): Promise<responseOngData> {
    const ong = {
      id: '4',
      name: data.name,
      email: data.email,
      cep: data.cep,
      adress: data.adress,
      state: data.state,
      city: data.city,
      phone: data.phone,
      password: data.password,
      createdAt: new Date()
    }

    this.onganization.push(ong)

    return ong
  }

  async getPetsByAndress (city: string, state: string): Promise<ResponseGetPetsByAndress | null> {
    const pet = this.onganization.find((ong) => ong.city === city && ong.state === state)

    return pet ?? null
  }

  async findById (id: string): Promise<responseOngData | null > {
    const ongFound = this.onganization.find((ong) => ong.id === id)

    return ongFound ?? null
  }

  async findOngByEmail (email: string): Promise<responseOngData | null> {
    const ong = this.onganization.find(ong => ong.email === email)

    return ong ?? null
  }
}
