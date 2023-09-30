import { Entity,PrimaryGeneratedColumn,Column, BaseEntity } from "typeorm";

@Entity()
export class Person extends BaseEntity{
@PrimaryGeneratedColumn()
id: number;

@Column()
name:string;


@Column()
request:string;


@Column('int',{default:20000})
amount:number;

}
