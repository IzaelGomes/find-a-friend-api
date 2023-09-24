import { hash } from 'bcryptjs'
import { type requestOngData, type responseOngData, type OngsRepository } from '../repositories/interfaces/ong-interface'

interface OngRequest {
  data: requestOngData
}

interface OngReponse {
  createdOng: responseOngData
}
export class CreateOngUseCase {
  constructor (
    private ongRepository: OngsRepository
  ) {}

  async execute ({ data }: OngRequest): Promise<OngReponse> {
    const password = await hash(data.password, 6)

    const ongData = {
      ...data,
      password
    }

    const createdOng = await this.ongRepository.create(ongData)

    return {
      createdOng
    }
  }
}
