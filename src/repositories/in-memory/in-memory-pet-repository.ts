import { type PetRequest, type PetReponse, type PetsRepository } from '../interfaces/pet-interface'

export class InMemoryPetsRepository implements PetsRepository {
  public pet: PetReponse[] = []

  async create (data: PetRequest, ongId: string): Promise<PetReponse> {
    const pet = {
      id: '5',
      name: data.name,
      age: data.age,
      size: data.size,
      energy: data.energy,
      enviroment: data.enviroment,
      independent: data.independent,
      description: data.description,
      ongId,
      createdAt: new Date(),
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

    this.pet.push(pet)

    return pet
  }

  async getAllPets (city: string): Promise<PetReponse[]> {
    throw new Error()
  }

  async findPetById (id: string): Promise<PetReponse | null> {
    const pet = this.pet.find((pet) => pet.id === id)

    return pet ?? null
  }
}
