import axios from 'axios'

export const getPokemon = async (maxPokedexNumber?: number) => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${maxPokedexNumber}&offset=0`
  )

  console.log(res)

  return res.data.results
}
