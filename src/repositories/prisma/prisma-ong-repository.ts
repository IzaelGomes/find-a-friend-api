import { prisma } from '../../db/prisma'
import { type responseOngData, type OngsRepository, type ResponseGetPetsByAndress, type requestOngData } from '../interfaces/ong-interface'
import { type Size, type Independent, type Age } from '../interfaces/pet-interface'

export class PrismaOngRepository implements OngsRepository {
  async findById (id: string): Promise<responseOngData | null> {
    const ong = prisma.organization.findFirst({
      where: {
        id
      }
    })

    return ong
  }

  async create (data: requestOngData): Promise<responseOngData> {
    const ong = await prisma.organization.create({
      data: {
        ...data
      }
    })

    return ong
  }

  async getPetsByAndress (city: string, state: string, age: Age | undefined, energy: number | undefined, independent: Independent | undefined, size: Size | undefined): Promise<ResponseGetPetsByAndress> {
    const ong = await prisma.organization.findMany({
      where: {
        state,
        city
      },
      select: {
        Pet: {
          where: {
            age,
            energy,
            size,
            independent
          }
        }
      }
    })

    return ong
  }

  async findOngByEmail (email: string): Promise<responseOngData> {
    throw new Error('Method not implemented.')
  }
}
