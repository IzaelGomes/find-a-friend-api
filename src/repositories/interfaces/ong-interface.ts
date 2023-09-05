import { Pet } from "./pet-interface"

export type Ong = {
    name:string, 
    email: string, 
    cep:string, 
    adress:string,
    state:string, 
    city: string, 
    password: string, 
    pet?:Pet[]
}

export interface OngsRepository {
    create(data:Ong): Promise<Ong>
    getAllPets(city:string): Promise<Pet>

}