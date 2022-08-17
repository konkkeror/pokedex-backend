import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pokemonesRouter from "./routers/pokemones.router";
import pokemoneMastersRouter from "./routers/pokemon-masters.router";
import { Database } from "./utils/database";
import cors from 'cors';


dotenv.config();
const database:Database = new Database(); //Se conecta a mongo
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/pokemones', pokemonesRouter);
app.use('/pokemon-masters', pokemoneMastersRouter);

app.listen(port, () => {
	console.log(`Servidor modificado https://localhost:${port}`);
});
