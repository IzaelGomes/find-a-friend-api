export type Age = 'FILHOTE' | 'ADULTO'
export type Independent = 'BAIXO' | 'MEDIO' | 'ALTO'
export type Size = 'PEQUENINO' | 'MEDIO' | 'GRANDE'




export interface PetRequest {
  id: string
  name: string
  description: string
  age: Age
  size: Size
  energy: number
  independent: Independent
  enviroment: string
  createdAt: Date
  requirements: requirementsRequest[]
  petImgs: PetImgsRequest[]
}

export interface PetReponse {
  id: string
  name: string
  description: string
  age: Age
  size: Size
  energy: number
  ongId: string
  independent: Independent
  enviroment: string
  createdAt: Date
  requirements: requirementsReponse[]
  petImgs: PetImgsReponse[]
}

export interface FindPet {
  city: string
  state: string
  age?: Age
  size?: Size
  energy?: number
  independent?: Independent
}

type requirementsReponse = {
  id: string
  description: string
  petId: string
}

type PetImgsReponse = {
  id: string
  buffer: string
  imgName: string
  petId: string
}

type requirementsRequest = {
  description: string
}

type PetImgsRequest = {
  buffer: string
  imgName: string
}
export interface PetsRepository {
  create(data: PetRequest, ongId: string): Promise<Omit<PetReponse, 'requirements' | 'petImgs'>>
  getAllPets(city: string): Promise<PetReponse[]>
  findPetById(id: string): Promise<PetReponse | undefined>
}
