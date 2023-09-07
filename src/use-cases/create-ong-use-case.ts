import { type Ong, type OngsRepository } from '../repositories/interfaces/ong-interface'

export class CreateOngUseCase {
  constructor (
    private ongRepository: OngsRepository
  ) {}

  async execute (data: Ong) {
    const createdOng = await this.ongRepository.create(data)

    return {
      createdOng
    }
  }
}
