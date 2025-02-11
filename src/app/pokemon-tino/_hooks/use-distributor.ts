// src/features/pokemon/pages/distributor/hooks/use-distributor.ts
import { useState } from "react";
import { PokemonType, MasterType } from "../_types";
import { shuffle } from "../_utils/shuffle";

type AssignmentType = Record<string, PokemonType | null>;

const useDistributor = (
  initialPokemons: PokemonType[],
  masters: MasterType[]
) => {
  const [assignments, setAssignments] = useState<AssignmentType>({});

  const distributePokemons = () => {
    // Cria um array com Pokémons e a opção "sem Pokémon" para cada treinador
    const availableOptions = [...initialPokemons, null]; // 'null' representa "sem Pokémon"
    const shuffledOptions = shuffle(availableOptions);

    const newAssignments: AssignmentType = {};

    masters.forEach((master, index) => {
      // Distribui os Pokémons (ou 'null') de forma aleatória
      newAssignments[master.id] =
        shuffledOptions[index % shuffledOptions.length];
    });

    setAssignments(newAssignments);
  };

  const clearAssignments = () => {
    const clearedAssignments: AssignmentType = {};
    masters.forEach((master) => {
      clearedAssignments[master.id] = null;
    });
    setAssignments(clearedAssignments);
  };

  return { assignments, distributePokemons, clearAssignments };
};

export default useDistributor;
