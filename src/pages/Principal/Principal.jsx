import MovieList from "./MovieList";

const Principal = ({ movies,onAddFavorite }) => {
  
    return (
        <>
            <MovieList titulo="Trending Now" movies={movies}  />
        </>
    );
};

export default Principal;
