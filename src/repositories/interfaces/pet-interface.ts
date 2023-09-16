export type Age = 'FILHOTE' | 'ADULTO'
export type Independent = 'BAIXO' | 'MEDIO' | 'ALTO'
export type Size = 'PEQUENINO' | 'MEDIO' | 'GRANDE'

export interface Pet {
  id: string
  name: string
  description: string
  age: Age
  size: Size
  energy: number
  independent: Independent
  enviroment: string
  createdAt: Date
  requirements: requirements[]
  petImgs: PetImgs[]
}

export interface FindPet {
  city: string
  state: string
  age?: Age
  size?: Size
  energy?: number
  independent?: Independent
}

type requirements = {
  // id: string
  description: string
  // petId: string
}

type PetImgs = {
  // id: string
  buffer: string
  imgName: string
  // petId: string
}

export type petUseCaseRequest = Omit<Pet, 'id' | 'createdAt'>

export type petResponse = Omit<Pet, 'requirements' | 'petImgs'>
export interface PetsRepository {
  create(data: petUseCaseRequest, ongId: string): Promise<petResponse>
  getAllPets(city: string): Promise<Pet[]>
}
