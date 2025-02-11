// src/features/pokemon/types.ts
export type Dreamworld = {
  front_default: string;
};

export type Other = {
  dream_world: Dreamworld;
};

export type Sprites = {
  other: Other;
};

export type PokemonType = {
  id: number;
  name: string;
  sprites: Sprites;
};

export type MasterType = {
  id: string;
  name: string;
  image: string;
};
