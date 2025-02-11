// src/routes/_authenticated/pokemon/distributor/index.tsx
import { PokemonDistributor } from "@/app/pokemon-tino/_components/pokemon-distributor";
import { getAllPokemons } from "@/app/pokemon-tino/_queries/use-pokemons";

export default async function PokemonDistributorPage() {
  const pokemons = await getAllPokemons();

  return <PokemonDistributor initialPokemons={pokemons} />;
}
