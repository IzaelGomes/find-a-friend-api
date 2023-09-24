// import { beforeEach, describe, expect, it } from 'vitest'
// import { InMemoryOngRepository } from '../repositories/in-memory/in-memory-ong-repository'
// import { FindPetsUseCase } from './find-pets'
// import { type Age, type Size, type Independent } from '@prisma/client'
// import { InMemoryPetsRepository } from '../repositories/in-memory/in-memory-pet-repository'

// let ongRepository: InMemoryOngRepository
// let sut: FindPetsUseCase
// let petRepository: InMemoryPetsRepository

// describe('find pets by location use case', () => {
//   beforeEach(async () => {
//     petRepository = new InMemoryPetsRepository()

//     ongRepository = new InMemoryOngRepository()
//     sut = new FindPetsUseCase(ongRepository)

//     const ongData = {
//       id: '4',
//       name: 'family',
//       email: 'family@gmail.com',
//       cep: '2222333',
//       adress: 'rua maria generosa de almeida',
//       state: 'CE',
//       city: 'juazeiro do norte',
//       password: '233333',
//       createdAt: new Date()
//     }

//     await ongRepository.create(ongData)

//     const data = {
//       id: '19',
//       name: 'nina',
//       age: 'FILHOTE' as Age,
//       size: 'PEQUENINO' as Size,
//       energy: 5,
//       enviroment: 'Ambiente amplo',
//       independent: 'BAIXO' as Independent,
//       ongId: '4',
//       description: 'Animal muito feliz',
//       createdAt: new Date(),
//       requirements: [{
//         description: 'precisa ter dinheiro'
//       }
//       ],
//       petImgs: [{
//         buffer: 'daklsdjkaqew2212',
//         imgName: 'cachorro'
//       }]
//     }

//     petRepository.create(data, ongData.id)
//   })

//   it('should be able to fetch pets with filters', async () => {
//     const { age, city, energy, independent, size, state } = {
//       state: 'CE',
//       city: 'juazeiro do norte',
//       age: 'FILHOTE' as Age,
//       size: 'PEQUENINO' as Size,
//       energy: 3,
//       independent: 'BAIXO' as Independent
//     }

//     const { petsByLocation } = await sut.execute({ city, state, age, energy, independent, size })

//     expect(petsByLocation).toEqual({})
//   })
// })
