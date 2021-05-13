const Movie = require("../model/movies");

module.exports = {
  index(req, res) {
    const movies = Movie.get();
    res.render("pages/movies", { movies });
  },

  create(req, res) {
    res.render("pages/register");
  },

  save(req, res) {
    const movies = Movie.get();
    const lastId = movies[movies.length - 1]?.id || 0;

    Movie.create({
      id: lastId + 1,
      ...req.body,
    });
    
    return res.redirect("/movies");
  },

  show(req, res) {
    const movieId = req.params.id;
    const movies = Movie.get();

    const movie = movies.find((movie) => Number(movie.id) === Number(movieId));

    //refatorar
    if (!movie) {
      return res.send("Movie not found :)");
    }

    return res.render("pages/movieEdit", { movie });
  },

  update(req, res) {
    const movieId = req.params.id;
    const movies = Movie.get();

    let movie = movies.find((movie) => Number(movie.id) === Number(movieId));

    //refatorar
    if (!movie) {
      return res.send("Movie not found!!!");
    }

    const updatedMovie = {
      ...movie,
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      parental_rating: req.body.parental_rating,
      duration: req.body.duration,
      synopsis: req.body.synopsis,
    };

    const newMovies = movies.map((movie) => {
      if (Number(movie.id) === Number(movieId)) {
        movie = updatedMovie;
      }
      return movie;
    });

    Movie.update(newMovies);

    res.redirect("/movie/" + movieId);
  },

  delete(req, res) {
    const movieId = req.params.id;
    
    Movie.delete(movieId);    

    res.redirect("/movies");
  },
};
