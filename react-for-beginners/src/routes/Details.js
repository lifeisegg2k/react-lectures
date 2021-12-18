import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Detail</h1>
      <div>
        {
          loading ? (
            <h1>Loading...</h1>
          ) : (
            <table border="1">
              <tr>
                <th>Title</th>
                <td>{ movie.title }</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{ movie.year }</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>
                  <ul>
                    { 
                      movie.genres.map((g) => (
                        <li key={ g }>{ g }</li>
                      ))
                    }
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Ration</th>
                <td>{ movie.rating }</td>
              </tr>
              <tr>
                <th>Runtime</th>
                <td>{ movie.runtime }</td>
              </tr>
              <tr>
                <th>Poster</th>
                <td><img src={ movie.medium_cover_image } alt={ movie.title } /></td>
              </tr>
              <tr>
                <th>description</th>
                <td>{ movie.description_intro }</td>
              </tr>
            </table>
          )
        }
      </div>
      <h2>
        <Link to="/">Back to Movies</Link>
      </h2>
    </div>
  )
}

export default Details;
