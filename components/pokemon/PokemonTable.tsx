import { getPokemon } from '@/services/PokemonService'
import type { PokedexPokemon } from '@/types/PokemonTypes'
import { PokemonTableRow } from '@/components/pokemon/PokemonTableRow'

export async function PokemonTable() {
  const allPokemon = await getPokemon()

  return (
    <>
      {allPokemon.map((pokemon: PokedexPokemon, i: number) => (
        <PokemonTableRow key={i} pokemon={pokemon} />
      ))}
    </>
  )
}
