import { prisma } from '../../db/prisma'
import { type OngRequestValues, type Ong, type OngsRepository, type ResponseGetPetsByAndress } from '../interfaces/ong-interface'
import { type Size, type Independent, type Age } from '../interfaces/pet-interface'

export class PrismaOngRepository implements OngsRepository {
  async findById (id: string): Promise<Ong | null | undefined> {
    const ong = prisma.organization.findFirst({
      where: {
        id
      }
    })

    return ong
  }

  async create (data: OngRequestValues): Promise<Ong> {
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
}
