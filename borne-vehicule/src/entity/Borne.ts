import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Borne")
export class Borne extends BaseEntity {

    @PrimaryGeneratedColumn()
    idBorne: number;

    @Column({nullable: true})
    nbOccupiedPlaces: number;

    @Column({nullable: true})
    nbTotalPlaces: number;

    @Column({nullable: true})
    nbMaintenanceAgents: number;


    @Column({nullable: true})
    longitude: string;

    @Column({nullable: true})
    latitude: string;

    @Column({nullable: true})
    city: string;

}
