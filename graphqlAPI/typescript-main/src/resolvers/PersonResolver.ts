import { Person } from "../entity/Person";
import { Resolver, Mutation, Arg, Int,Query } from "type-graphql";


/*
class PersonInput{
@Field ()
name:string;

@Field(()=>Int)
amount:number;

@Field()
request:string;
}
*/

@Resolver()

export class PersonResolver {
@Mutation(()=>Boolean)

async createPerson(
    
    @Arg("name")name:string,@Arg('amount',()=>Int)amount:number ,@Arg("request")request:string){
   await  Person.insert({name,amount,request})
    return true;
}


@Mutation(()=>Boolean)

async updatePerson(
    
    @Arg("id",()=>Int) id: number,@Arg("name")name:string,@Arg('amount',()=>Int)amount:number ,@Arg("request")request:string){
   await  Person.update({id},{name,amount,request})
    return true;
}

@Mutation(()=>Boolean)
async DeletePerson(
    @Arg("id",()=>Int) id:number){
        await Person.delete({id});
        return true
    }

   
@Query(()=>[Person])
persons(){
    return Person.find();
}



}
