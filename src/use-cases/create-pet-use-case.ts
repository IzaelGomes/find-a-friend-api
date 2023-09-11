import { type OngsRepository } from '../repositories/interfaces/ong-interface'
import { type petUseCaseRequest, type PetsRepository } from '../repositories/interfaces/pet-interface'
import { OngNotFoundError } from './erros/ong-not-found-erro'
interface CreatePetUseCaseRequest {
  data: petUseCaseRequest
  ongId: string
}
export class CreatePetUseCase {
  constructor (
    private petRepository: PetsRepository,
    private ongRepository: OngsRepository
  ) {}

  async execute ({ data, ongId }: CreatePetUseCaseRequest) {
    console.log(ongId)
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
