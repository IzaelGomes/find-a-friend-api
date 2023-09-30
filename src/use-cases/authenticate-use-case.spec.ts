import { describe, expect, it, beforeEach } from 'vitest'
import { AuthenticateUseCase } from './authenticate-use-case'
import { InMemoryOngRepository } from '../repositories/in-memory/in-memory-ong-repository'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './erros/invalid-credentials.erro'

let ongRepository: InMemoryOngRepository
let sut: AuthenticateUseCase

describe('authenticate use case', () => {
  beforeEach(async () => {
    ongRepository = new InMemoryOngRepository()
    sut = new AuthenticateUseCase(ongRepository)

    const ongData = {
      id: '4',
      name: 'family',
      email: 'family@gmail.com',
      cep: '2222333',
      adress: 'rua maria generosa de almeida',
      state: 'CE',
      phone: '8887778',
      city: 'juazeiro do norte',
      password: await hash('123456', 6),
      createdAt: new Date()
    }

    await ongRepository.create(ongData)
  })

  it('should be able to authenticate', async () => {
    const { ong } = await sut.execute({
      email: 'family@gmail.com',
      password: '123456'
    })

    expect(ong.email).toEqual(expect.any(String))
  })

  it('should be able to authenticate with wrong email', async () => {
    expect(async () => sut.execute({
      email: 'John@gmail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should be able to authenticate with wrong password', async () => {
    expect(async () => sut.execute({
      email: 'family@gmail.com',
      password: '123456890'
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
