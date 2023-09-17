import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOngRepository } from '../repositories/in-memory/in-memory-ong-repository'
import { type Age, type Size, type Independent } from '@prisma/client'
import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pet-repository'
import { FindPetUseCase } from './find-pet-by-id-use-case'

let ongRepository: InMemoryOngRepository
let sut: FindPetUseCase
let petRepository: InMemoryPetsRepository

describe('find pet', () => {
  beforeEach(async () => {
    petRepository = new InMemoryPetsRepository()

    ongRepository = new InMemoryOngRepository()
    sut = new FindPetUseCase(petRepository)

    const ongData = {
      id: '4',
      name: 'family',
      email: 'family@gmail.com',
      cep: '2222333',
      adress: 'rua maria generosa de almeida',
      state: 'CE',
      city: 'juazeiro do norte',
      password: '233333',
      createdAt: new Date()
    }

    await ongRepository.create(ongData)

    const data = {
      name: 'nina',
      age: 'FILHOTE' as Age,
      size: 'PEQUENINO' as Size,
      energy: 5,
      enviroment: 'Ambiente amplo',
      independent: 'BAIXO' as Independent,
      ongId: '4',
      description: 'Animal muito feliz',
      requirements: [{
        description: 'precisa ter dinheiro'
      }
      ],
      petImgs: [{
        buffer: 'daklsdjkaqew2212',
        imgName: 'cachorro'
      }]
    }

    await petRepository.create(data, ongData.id)
  })

  it('should be able to fetch pet by id', async () => {
    const id = '5'
    const { pet } = await sut.execute(id)

    expect(pet?.id).toEqual('5')
  })
})
