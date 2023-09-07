import { type OngsRepository } from '../repositories/interfaces/ong-interface'
import { type Pet, type PetsRepository } from '../repositories/interfaces/pet-interface'
import { OngNotFoundError } from './erros/ong-not-found-erro'

export class CreatePetUseCase {
  constructor (
    private petRepository: PetsRepository,
    private ongRepository: OngsRepository
  ) {}

  async execute (data: Pet) {
    const foundOng = await this.ongRepository.findById(data.ongId)

    if (!foundOng) {
      throw new OngNotFoundError()
    }

    const createdPet = this.petRepository.create(data)

    return {
      createdPet
    }
  }
}
