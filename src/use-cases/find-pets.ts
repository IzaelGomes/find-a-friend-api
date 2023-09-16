import { type OngsRepository } from '../repositories/interfaces/ong-interface'
import { type FindPet } from '../repositories/interfaces/pet-interface'

export class FindPetsUseCase {
  constructor (
    private ongRepository: OngsRepository
  ) {}

  async execute ({ city, state, age, energy, independent, size }: FindPet) {
    const petsByLocation = await this.ongRepository.getPetsByAndress(city, state, age, energy, independent, size)

    return {
      petsByLocation
    }
  }
}
