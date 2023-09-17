import { type OngsRepository } from '../repositories/interfaces/ong-interface'
import { type PetRequest, type PetsRepository } from '../repositories/interfaces/pet-interface'
import { OngNotFoundError } from './erros/ong-not-found-erro'
interface CreatePetUseCaseRequest {
  data: PetRequest
  ongId: string
}
export class CreatePetUseCase {
  constructor (
    private petRepository: PetsRepository,
    private ongRepository: OngsRepository
  ) {}

  async execute ({ data, ongId }: CreatePetUseCaseRequest) {
    const foundOng = await this.ongRepository.findById(ongId)

    if (!foundOng) {
      throw new OngNotFoundError()
    }

    const createdPet = this.petRepository.create(data, ongId)

    return {
      createdPet
    }
  }
}
