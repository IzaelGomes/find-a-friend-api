import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pet-repository'
import { CreatePetUseCase } from './create-pet-use-case'
import { InMemoryOngRepository } from '../repositories/in-memory/in-memory-ong-repository'
import { OngNotFoundError } from './erros/ong-not-found-erro'
import { type Age, type Independent, type Size } from '../repositories/interfaces/pet-interface'

let petRepository: InMemoryPetsRepository
let ongRepository: InMemoryOngRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(async () => {
    petRepository = new InMemoryPetsRepository()
    ongRepository = new InMemoryOngRepository()
    sut = new CreatePetUseCase(petRepository, ongRepository)

    const ongData = {
      id: '4',
      name: 'family',
      email: 'family@gmail.com',
      cep: '2222333',
      adress: 'rua maria generosa de almeida',
      state: 'CE',
      phone: '88887778',
      city: 'juazeiro do norte',
      password: '233333',
      createdAt: new Date()
    }

    await ongRepository.create(ongData)
  })

  it('should be able to create a pet', async () => {
    const data = {
      id: '19',
      name: 'nina',
      age: 'FILHOTE' as Age,
      size: 'PEQUENINO' as Size,
      energy: 5,
      enviroment: 'Ambiente amplo',
      independent: 'BAIXO' as Independent,
      description: 'Animal muito feliz',
      ongId: '4',
      createdAt: new Date(),
      requirements: [{
        description: 'precisa ter dinheiro'
      }
      ],
      petImgs: [{
        buffer: 'daklsdjkaqew2212',
        imgName: 'cachorro'
      }]
    }

    const ongId = '4'

    const { createdPet } = await sut.execute({ data, ongId })

    expect((await (createdPet)).id).toEqual(expect.any(String))
  })

  it('should not be able to create a pet if Ong is not valid', async () => {
    const data = {
      id: '19',
      name: 'nina',
      age: 'FILHOTE' as Age,
      size: 'PEQUENINO' as Size,
      energy: 5,
      enviroment: 'Ambiente amplo',
      independent: 'BAIXO' as Independent,
      description: 'Animal muito feliz',
      ongId: '5',
      createdAt: new Date(),
      requirements: [{
        id: '17',
        description: 'precisa ter dinheiro',
        petId: '19'
      }
      ],
      petImgs: [{
        id: '18',
        buffer: 'daklsdjkaqew2212',
        imgName: 'cachorro',
        petId: '19'
      }]
    }

    const ongId = '5'

    await expect(async () => await sut.execute({ data, ongId })).rejects.toBeInstanceOf(OngNotFoundError)
  })
})
