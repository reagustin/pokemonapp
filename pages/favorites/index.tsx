import { Layout } from "@/components/layouts"
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";
import FavoritesPokemons from "@/components/pokemon/FavoritePokemons";

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());    
  }, [])
  
  return (
    <Layout title="Pokemons - Favoritos">
      {
        favoritesPokemons.length === 0
        ? (<NoFavorites/>)
        : (<FavoritesPokemons pokemons={favoritesPokemons}/>)
      }      
    </Layout>
  )
}

export default FavoritesPage