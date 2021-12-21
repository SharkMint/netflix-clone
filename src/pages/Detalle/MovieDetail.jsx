const MovieDetail = ({
  genres,
  title,
  vote_average,
  poster_path,
  release_date,
  overview,
  backdrop_path,
}) => {
  return (
    <div className="movieDetails">
      <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
      <br />
      {/* <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" /> */}
      <h3>{title}</h3>
      <ul>
        {/* {genres.map((gen, i) => (
          <li>{gen.name}</li>
        ))} */}
      </ul>
      <p>{overview}</p>
      <p>{release_date}</p>
      <p>
        Vote <span>{vote_average}</span>
      </p>
    </div>
  );
};

export default MovieDetail;
