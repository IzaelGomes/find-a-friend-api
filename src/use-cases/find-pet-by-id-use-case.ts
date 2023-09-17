import { type PetsRepository } from '../repositories/interfaces/pet-interface'

export class FindPetUseCase {
  constructor (
    private petRepository: PetsRepository
  ) {}

  async execute (id: string) {
    const pet = await this.petRepository.findPetById(id)

    return {
      pet
    }
  }
}
