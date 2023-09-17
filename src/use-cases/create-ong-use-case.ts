import { type OngRequestValues, type responseOngData, type OngsRepository } from '../repositories/interfaces/ong-interface'

interface OngRequest {
  data: OngRequestValues
}

interface OngReponse {
  createdOng: responseOngData
}
export class CreateOngUseCase {
  constructor (
    private ongRepository: OngsRepository
  ) {}

  async execute ({ data }: OngRequest): Promise<OngReponse> {
    const createdOng = await this.ongRepository.create(data)

    return {
      createdOng
    }
  }
}
