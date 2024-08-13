import axios from 'axios'
import { GEN_ONE_MAX } from '@/consts'

export const getPokemon = async () => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${GEN_ONE_MAX}&offset=0`
  )

  return res.data.results
}
