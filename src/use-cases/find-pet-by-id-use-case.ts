import { type PetsRepository } from '../repositories/interfaces/pet-interface'
import { PetNotFoundError } from './erros/pet-not-found-erro'

export class FindPetUseCase {
  constructor (
    private petRepository: PetsRepository
  ) {}

  async execute (id: string) {
    const pet = await this.petRepository.findPetById(id)

    if (!pet) {
      throw new PetNotFoundError()
    }

    return {
      pet
    }
  }
}
