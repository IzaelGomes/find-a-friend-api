import { prisma } from '../../db/prisma'
import { type OngRequestValues, type Ong, type OngsRepository } from '../interfaces/ong-interface'
import { type Pet } from '../interfaces/pet-interface'

export class PrismaOngRepository implements OngsRepository {
  async create (data: OngRequestValues): Promise<Ong> {
    const ong = prisma.organization.create({
      data: {
        ...data
      }
    })

    return ong
  }

  getAllPets!: (city: string) => Promise<Pet>
  findById!: (id: string) => Promise<Ong | undefined>
}
