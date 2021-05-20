import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Vehicle")
export class Vehicle extends BaseEntity {

    @PrimaryGeneratedColumn()
    idVehicle: number;

    @Column()
    unitpriceperhour: number;

    @Column()
    unitpriceperday: number;

    @Column()
    vehicletype: String;

    @Column()
    vehiclebrand: String;

    @Column()
    vehiclemodel: String;

    @Column()
    availability: boolean;

    @Column()
    image: String;
}
