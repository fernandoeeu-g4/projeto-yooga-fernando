// src/features/pokemon/queries/use-pokemons.ts
import { PokemonType } from "../_types";

const pokemonsList = ["charmander", "squirtle", "bulbasaur"];

async function getPokemon(pokemonName: string): Promise<PokemonType> {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  const response = await fetch(url);
  const parsedResponse = await response.json();
  return parsedResponse as PokemonType;
}

export async function getAllPokemons() {
  return Promise.all(pokemonsList.map((name) => getPokemon(name)));
}
