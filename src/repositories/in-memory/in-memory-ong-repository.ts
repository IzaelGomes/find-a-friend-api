import { Ong, OngsRepository } from "../interfaces/ong-interface";
import { Pet } from "../interfaces/pet-interface";
import { randomUUID } from "node:crypto"


export class Ongs implements OngsRepository {
   
    public onganization:Ong[] = []
    

   async create(data: Ong):Promise<Ong>{

    const ong = {
        id: randomUUID(), 
        ...data
    }


    this.onganization.push(ong)

    return  ong
}

    
  async  getAllPets(city: string): Promise<Pet> {
        throw new Error("Method not implemented.");
    }

    
}

