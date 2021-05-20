import { Request, Response } from "express";
import {Vehicle} from "../entity/Vehicle";


export const getVehicle =  (req: Request, res: Response) => {

    Vehicle.findOne({idVehicle: parseInt(req.params.idVehicle)})
    .then((vehicle: any) => {
        res.status(200).send(vehicle);
    }).catch((error) => {
        res.status(500).send({
            message: "Erreur Serveur " + error
        });
    });
}

export const addVehicle = async (req: Request, res: Response) => {
    const vehicle = Vehicle.create({
        // There are somme fields missing
        unitpriceperhour: req.body.unitpriceperhour,
        unitpriceperday: req.body.unitpriceperday,
        vehicletype: req.body.vehicletype,
        vehiclebrand: req.body.vehiclebrand,
        vehiclemodel: req.body.vehiclemodel,
        availability: req.body.availability,
        image: req.body.image
    })

    await vehicle.save()
    res.status(200).send(vehicle)
}

export async function getVehicles(_req: Request, res: Response) {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles)
}

export const updateVehicle = async (req: Request, res: Response) => {

    Vehicle.update({idVehicle: parseInt(req.params.idVehicle)}, {
        unitpriceperhour: req.body.unitpriceperhour,
        unitpriceperday: req.body.unitpriceperday,
        vehicletype: req.body.vehicletype,
        vehiclebrand: req.body.vehiclebrand,
        vehiclemodel: req.body.vehiclemodel,
        availability: req.body.availability,
        image: req.body.image
    })
    .then((vehicle: any) => {
        return res.status(200).send(vehicle);
    }).catch((err: { kind: string; }) => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Vehicle non trouvé"
            });                
        }

        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });

    return null;
    
}

export const deleteVehicle = async (req: Request, res: Response) => {
    Vehicle.delete({idVehicle: parseInt(req.params.idVehicle)})
    .then(() => {
        return res.status(200).send({message: "Vehicle supprimée avec succés!"});
    }).catch((err: { kind: string; name: string; }) => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Vehicle non trouvé"
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}