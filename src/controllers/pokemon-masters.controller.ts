import { Request, Response } from "express";
import { PokemonMastersSchema } from "../model/pokemon-master.schema";
import mongoose, {ObjectId}  from "mongoose";

export const getPokemonMasters = (req: Request, res: Response) => {
  PokemonMastersSchema.find()
		.then((result) => {
			res.send({message: 'Maestros pokemon',result});
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
}

// Agregar pokemon a un maestro pokemon
export const addPokemonToMaster = (req: Request, res: Response) => {
  PokemonMastersSchema.updateOne({_id: req.params.id},
    {
      $push: { 
          pokemons: {
            _id: new mongoose.Types.ObjectId(req.body.id),
            name: req.body.name,
            img: req.body.img
          } 
      }
    }
  ).then(result => {
    res.send({message: 'Pokemon agregado', result});
    res.end();
  }).catch(error => {
    res.send({message: 'Ocurrio un error', error});
    res.end();
  })
};