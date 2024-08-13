import { PokemonTable } from '@/components/pokemon/PokemonTable'

export default async function Home() {
  return (
    <main className='p-4'>
      <PokemonTable />
    </main>
  )
}
