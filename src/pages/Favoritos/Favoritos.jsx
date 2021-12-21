import React, { useEffect } from "react";
import MovieList from "../Principal/MovieList";
//import Favoritos from './Favoritos';

const Favoritos = ({favoritos}) => {
    useEffect(() => {
    

    console.log(favoritos);
    }, []);

    return (
        <div>
            <p>Funciona</p>
            <MovieList movies={favoritos} onAddFavorite={(e) => {}} />
        
        </div>
    );
};

export default Favoritos;
