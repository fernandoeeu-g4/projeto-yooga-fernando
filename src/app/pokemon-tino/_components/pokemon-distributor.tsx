// src/features/pokemon/pages/distributor/index.tsx
"use client";
import React from "react";
import { PokemonType } from "../_types";
import { ControlButtons } from "./control-buttons";
import useDistributor from "../_hooks/use-distributor";
import { MASTERS } from "../_constants";
import MastersList from "./masters-list";

interface PokemonDistributorProps {
  initialPokemons: PokemonType[];
}

const PokemonDistributor: React.FC<PokemonDistributorProps> = ({
  initialPokemons,
}) => {
  const { assignments, distributePokemons, clearAssignments } = useDistributor(
    initialPokemons,
    MASTERS
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
      <h1 className="text-4xl font-bold">Distribuidor de Pokemon</h1>
      <ControlButtons
        onDistribuir={distributePokemons}
        onLimpar={clearAssignments}
      />
      <MastersList
        assignments={assignments}
        initialPokemons={initialPokemons}
      />
    </div>
  );
};

export { PokemonDistributor };
