import { type OngRequestValues, type Ong, type OngsRepository } from '../repositories/interfaces/ong-interface'

interface OngRequest {
  data: OngRequestValues
}

interface OngReponse {
  createdOng: Ong
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
