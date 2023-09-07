import { randomUUID } from 'crypto'
import { type Pet, type PetsRepository } from '../interfaces/pet-interface'

export class InMemoryPetsRepository implements PetsRepository {
  public pet: Pet[] = []

  async create (data: Pet): Promise<Pet> {
    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      age: data.age,
      size: data.size,
      energy: data.energy,
      enviroment: data.enviroment,
      independent: data.independent,
      description: data.description,
      ongId: '4',
      createdAt: data.createdAt,
      requirements: [{
        id: data.requirements[0].id,
        description: data.requirements[0].description,
        petId: data.requirements[0].petId
      }
      ],
      petImgs: [{
        id: data.petImgs[0].id,
        buffer: data.petImgs[0].buffer,
        imgName: data.petImgs[0].imgName,
        petId: data.petImgs[0].petId
      }]
    }

    return pet
  }

  async getAllPets (city: string): Promise<Pet[]> {
    throw new Error()
  }
}
