export enum Size {
  PEQUENINO = 'PEQUENINO',
  MEDIO = 'MEDIO',
  GRANDE = 'GRANDE'
}

export enum Independent {
  BAIXO = 'BAIXO',
  MEDIO = 'MEDIO',
  ALTO = 'ALTO'
}

export enum Age {
  FILHOTE = 'FILHOTE',
  ADULTO = 'ADULTO'
}

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
  ongId: string
  requirements: requirements[]
  petImgs: PetImgs[]
}

type requirements = {
  id: string
  description: string
  petId: string
}

type PetImgs = {
  id: string
  buffer: string
  imgName: string
  petId: string
}

export interface PetsRepository {
  create: (data: Pet) => Promise<Pet>
  getAllPets: (city: string) => Promise<Pet[]>
}
