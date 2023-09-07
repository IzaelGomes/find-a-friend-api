import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOngUseCase } from './create-ong-use-case'
import { InMemoryOngRepository } from '../repositories/in-memory/in-memory-ong-repository'

let ongRepository: InMemoryOngRepository
let sut: CreateOngUseCase

describe('Create Ong Use Case', () => {
  beforeEach(async () => {
    ongRepository = new InMemoryOngRepository()
    sut = new CreateOngUseCase(ongRepository)
  })

  it('should be able to create an ong', async () => {
    const date = new Date()
    const ongData = {
      name: 'family',
      email: 'family@gmail.com',
      cep: '2222333',
      adress: 'rua maria generosa de almeida',
      state: 'CE',
      city: 'juazeiro do norte',
      password: '233333',
      createdAt: date
    }

    const { createdOng } = await sut.execute(ongData)

    expect(createdOng.id).toEqual(expect.any(String))
  })
})
