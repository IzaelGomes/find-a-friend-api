import { OngsRepository } from "../interfaces/ong-interface";
import { Pet } from "../interfaces/pet-interface";



export class Ong implements OngsRepository {
    create(data: { name: string; email: string; cep: string; adress: string; state: string; city: string; password: string; pet?: Pet[] | undefined; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllPets(city: string): Promise<Pet> {
        throw new Error("Method not implemented.");
    }

    
}

