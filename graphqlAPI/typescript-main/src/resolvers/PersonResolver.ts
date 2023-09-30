import { Person } from "../entity/Person";
import { Resolver, Mutation, Arg, Int } from "type-graphql";

@Resolver()

export class PersonResolver {
@Mutation(()=>Boolean)

async createPerson(
    
    @Arg("name")name:string,@Arg('amount',()=>Int)amount:number ,@Arg("request")request:string){
   await  Person.insert({name,amount,request})
    return true;
}





}
