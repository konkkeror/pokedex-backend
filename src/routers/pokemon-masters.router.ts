import express from "express";
import { addPokemonToMaster, getPokemonMasters } from "../controllers/pokemon-masters.controller";

const router = express.Router();

router.get("/", getPokemonMasters);
router.put("/:id/pokemons", addPokemonToMaster);

export default router;