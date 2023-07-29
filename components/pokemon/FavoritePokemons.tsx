
import { FC } from "react";
import { Grid } from '@nextui-org/react';
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
    pokemons: number[]
}
const FavoritePokemons:FC<Props> = ({pokemons}) => {  
  
  return (    
    <Grid.Container>
    {
        pokemons.map( id =>(
            <FavoriteCardPokemon pokemonId={id}/>
        ))
    }
    </Grid.Container>       
  )
}

export default FavoritePokemons