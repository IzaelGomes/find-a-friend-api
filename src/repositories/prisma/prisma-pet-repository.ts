import { prisma } from '../../db/prisma'
import { type PetsRepository, type PetReponse, type PetRequest } from '../interfaces/pet-interface'

export class PrismaPetRepository implements PetsRepository {
  async create (data: PetRequest, ongId: string): Promise<Omit<PetReponse, 'requirements' | 'petImgs'>> {
    const pet = prisma.pet.create({
      data: {
        name: data.name,
        description: data.description,
        age: data.age,
        size: data.size,
        independent: data.independent,
        energy: data.energy,
        enviroment: data.enviroment,
        ongId,
        requirements: {
          createMany: {
            data: data.requirements.map(req => {
              return {
                description: req.description

              }
            })
          }
        },
        petImgs: {
          createMany: {
            data: data.petImgs.map(imgs => {
              return {
                buffer: imgs.buffer,
                imgName: imgs.imgName
              }
            })
          }
        }
      }

    })

    return pet
  }

  async getAllPets (city: string): Promise<PetReponse[]> {
    throw new Error('Method not implemented.')
  }

  async findPetById (id: string): Promise<PetReponse | undefined> {
    throw new Error('Method not implemented.')
  }
}
