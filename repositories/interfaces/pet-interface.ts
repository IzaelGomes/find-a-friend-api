




export type Pet = {
    name:string, 
    description: string, 
    age:string, 
    size:string,
    energy:string, 
    independent: string, 
    enviroment: string, 
    imgs:any
}

interface IPet {
    create(data:Pet): Promise<void>
    getAllPets(city:string): Promise<Pet>

}