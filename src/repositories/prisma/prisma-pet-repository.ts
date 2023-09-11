import { prisma } from '../../db/prisma'
import { type petResponse, type Pet, type PetsRepository } from '../interfaces/pet-interface'

export class PrismaPetRepository implements PetsRepository {
  async create (data: Pet, ongId: string): Promise<petResponse> {
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

  async getAllPets (city: string): Promise<Pet[]> {
    throw new Error('Method not implemented.')
  }
}
