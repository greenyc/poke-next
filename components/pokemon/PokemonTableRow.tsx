import type { PokedexPokemon } from '@/types/PokemonTypes'

export async function PokemonTableRow({
  pokemon,
}: {
  pokemon: PokedexPokemon
}) {
  return <p>{pokemon.name}</p>
}
