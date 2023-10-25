import React, { useEffect } from 'react';
import ResponseDisplay from './ResponseDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';

const FavoritesPage = () => {
    const { favorites = [], removeFavorite } = useFavoritesContext();
    // useEffect(() => {
    // console.log(isFavorite)
    // }, [favorites]);

    return (
        <div className='container'>
        <h1>Favorites</h1>
        {favorites.map((favoritePokemon) => (
            <ResponseDisplay
                key={favoritePokemon.species.name}
                name={favoritePokemon.species.name}
                abilities={favoritePokemon.abilities}
                forms={favoritePokemon.forms}
                game_indices={favoritePokemon.game_indices}
                moves={favoritePokemon.moves}
                species={favoritePokemon.species}
                sprites={favoritePokemon.sprites}
                stats={favoritePokemon.stats}
                types={favoritePokemon.types}
                isFavorite={true} 
                removeFavorite={removeFavorite}
            />
        ))}
        </div>
    )
};

export default FavoritesPage;