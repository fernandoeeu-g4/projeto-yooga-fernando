// src/features/pokemon/pages/distributor/components/masters-list.tsx
import React from "react";
import { MASTERS } from "../_constants";
import { PokemonType, MasterType } from "../_types";

interface MastersListProps {
  assignments: Record<string, PokemonType | null>;
  initialPokemons: PokemonType[];
}

const MastersList: React.FC<MastersListProps> = ({
  assignments,
  initialPokemons,
}) => {
  return (
    <div className="w-full max-w-md space-y-4">
      {MASTERS.map((master: MasterType) => {
        const assignedPokemon = assignments[master.id];
        const hasPokemons = initialPokemons.length > 0;

        let borderColor = "border-gray-300"; // Default border color

        if (hasPokemons) {
          borderColor =
            assignedPokemon === null ? "border-red-500" : "border-green-500";
        }

        return (
          <div
            key={master.id}
            className={`flex items-center p-4 rounded border ${borderColor}`}
          >
            <img
              src={master.image}
              alt={master.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="text-xl font-semibold">{master.name}</div>
              {assignedPokemon ? (
                <div className="flex items-center mt-2">
                  <img
                    src={
                      assignedPokemon.sprites.other.dream_world.front_default
                    }
                    alt={assignedPokemon.name}
                    className="w-12 h-12"
                  />
                  <span className="ml-2">{assignedPokemon.name}</span>
                </div>
              ) : (
                <div className="mt-2">Sem Pokémon</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MastersList;
