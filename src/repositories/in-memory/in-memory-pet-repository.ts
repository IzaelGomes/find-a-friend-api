import { type Pet, type PetsRepository } from '../interfaces/pet-interface'

export class InMemoryPetsRepository implements PetsRepository {
  public pet: Pet[] = []

  async create (data: Pet, ongId: string): Promise<Pet> {
    const pet = {
      id: data.id ?? '5',
      name: data.name,
      age: data.age,
      size: data.size,
      energy: data.energy,
      enviroment: data.enviroment,
      independent: data.independent,
      description: data.description,
      ongId,
      createdAt: data.createdAt,
      requirements: [{
        id: '4',
        description: 'teste',
        petId: '5'
      }
      ],
      petImgs: [{
        id: '4',
        buffer: data.petImgs[0].buffer,
        imgName: data.petImgs[0].imgName,
        petId: '4'
      }]
    }

    return pet
  }

  async getAllPets (city: string): Promise<Pet[]> {
    throw new Error()
  }
}
