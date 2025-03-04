import { Request, Response } from "express";
import {User} from "../entity/User";



export const getUtilisateur =  (req: Request, res: Response) => {

    User.findOne({idUser: parseInt(req.params.userId)})
    .then(utilisateur => {
        res.status(200).send(utilisateur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Utilisateur non trouvé"
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}

export const addUtilisateur = async (req: Request, res: Response) => {
    const user = User.create({
        lastName: req.body.nom,
        firstName: req.body.prenom,
        phoneNumber: req.body.numeroTelephone,
        address: req.body.address,
        userName: req.body.userName,
        userType: req.body.type
    })

    await user.save().then((user) => {
        res.status(200).send(user)
    }).catch((error) => {
        console.log(req.body.nom)
        res.status(400).send({"message": error})
    })
}

export async function getUtilisateurs(_req: Request, res: Response) {
    const utilisateurs = await User.find();
    res.status(200).json(utilisateurs)
}

export const updateUtilisateur = async (req: Request, res: Response) => {

    User.update({idUser: parseInt(req.params.userId)}, {
        lastName: req.body.nom,
        firstName: req.body.prenom,
        phoneNumber: req.body.numeroTelephone,
        address: req.body.address,
        userName: req.body.userName
    })
    .then(utilisateur => {
        res.status(200).send(utilisateur);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Utilisateur non trouvé"
            });                
        }

        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });

    
}

export const deleteUtilisateur = async (req: Request, res: Response) => {
    User.delete({idUser: parseInt(req.params.userId)})
    .then(() => {
        res.status(200).send({message: "Utilisateur supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur " + err
        });
    });
}


