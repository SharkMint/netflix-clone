import Movie from "./Movie";


const MovieList = ({ movies, onAddFavorite, titulo }) => {
  
    const peliculas = movies.map((movie, i) => (<Movie key={i} {...movie} onAddFavorite={onAddFavorite} />)) 

    return (
        <div>
            <h2>{titulo}</h2>
            <ul className="row">
                {peliculas}
            </ul>
        </div>
    );
};

export default MovieList;
