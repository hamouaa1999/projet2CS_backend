import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("User")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    userName: string

    @Column()
    lastName: string;

    @Column()
    userType: string

    @Column()
    firstName: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;
   
}