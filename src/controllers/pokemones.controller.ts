import { Request, Response } from "express";
import { PokemonSchema } from "../model/pokemon.schema";

// Obtener los poquemones
export const getPokemones = (req: Request, res: Response) => {
	PokemonSchema.find().limit(20)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

//Obtener solo uno
export const getPokemon = (req: Request, res: Response) => {
	PokemonSchema.find({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const addPokemon = (req: Request, res: Response) => {
	const p = new PokemonSchema({
		id: req.body.id,
		gender: req.body.gender,
		num: req.body.num,
		name: req.body.name,
		img: req.body.img,
		type: req.body.type,
		height: req.body.height, 
		weight: req.body.weight, 
		candy: req.body.candy, 
		candy_count: req.body.candy_count, 
		egg: req.body.egg, 
		spawn_chance: req.body.spawn, 
		avg_spawns: req.body.avg_spawns, 
		spawn_time: req.body.spawn_time, 
		multipliers: req.body.multipliers, 
		weaknesses: req.body.weaknesses, 
		next_evolution: req.body.next_evolution,
	});
  p.save().then(saveResponse => {
    res.send(saveResponse);
    res.end();
  }).catch(error=>{
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
  // aqui
};

export const updatePokemon = (req: Request, res: Response) => {
	// const p = new PokemonSchema({
	// 	id: req.body.id,
	// 	gender: req.body.gender,
	// 	num: req.body.num,
	// 	name: req.body.name,
	// 	img: req.body.img,
	// 	type: req.body.type,
	// 	height: req.body.height, 
	// 	weight: req.body.weight, 
	// 	candy: req.body.candy, 
	// 	candy_count: req.body.candy_count, 
	// 	egg: req.body.egg, 
	// 	spawn_chance: req.body.spawn, 
	// 	avg_spawns: req.body.avg_spawns, 
	// 	spawn_time: req.body.spawn_time, 
	// 	multipliers: req.body.multipliers, 
	// 	weaknesses: req.body.weaknesses, 
	// 	next_evolution: req.body.next_evolution,
	// });
  PokemonSchema.updateOne({_id: req.params.id}, {
		id: req.body.id,
		gender: req.body.gender,
		num: req.body.num,
		name: req.body.name,
		img: req.body.img,
		type: req.body.type,
		height: req.body.height, 
		weight: req.body.weight, 
		candy: req.body.candy, 
		candy_count: req.body.candy_count, 
		egg: req.body.egg, 
		spawn_chance: req.body.spawn, 
		avg_spawns: req.body.avg_spawns, 
		spawn_time: req.body.spawn_time, 
		multipliers: req.body.multipliers, 
		weaknesses: req.body.weaknesses, 
		next_evolution: req.body.next_evolution,
	}).then(updateResponse => {
    res.send({message: 'Registro actualizado', updateResponse});
    res.end();
  }).catch(error=>{
    res.send({message: 'Hubo un error al actualizar', error}); // shorthand
    res.end();
  });
};

export const deletePokemon = (req: Request, res: Response) => {
	PokemonSchema.remove({_id: req.params.id})
	.then(removeResult => {
		res.send({message: 'Registro eliminado', removeResult});
		res.end();
	});
	
};
