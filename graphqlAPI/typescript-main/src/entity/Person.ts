import { Entity,PrimaryGeneratedColumn,Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Person extends BaseEntity{

@Field(()=> Int)
@PrimaryGeneratedColumn()
id: number;

@Field()
@Column()
name:string;

@Field()
@Column()
request:string;

@Field(()=> Int)
@Column('int',{default:20000})
amount:number;

}
