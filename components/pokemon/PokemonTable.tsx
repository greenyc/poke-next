import { getPokemon } from '@/services/PokemonService'
import type { PokedexPokemon } from '@/types/PokemonTypes'
import { PokemonTableRow } from '@/components/pokemon/PokemonTableRow'

export async function PokemonTable({ generations }: { generations: number[] }) {
  // TODO: Map API call to selected generations?
  // Get all data and filter gens out?
  const maxNo = generations.includes(1) ? 151 : 0

  const genOnePokemon = await getPokemon(maxNo)

  return (
    <main className='p-4'>
      {genOnePokemon.map((pokemon: PokedexPokemon, i: number) => (
        <PokemonTableRow key={i} pokemon={pokemon} />
      ))}
    </main>
  )
}
