const Movie = require("../model/movies");

module.exports = {
  async index(req, res) {
    const movies = await Movie.get();
    res.render("pages/movies", { movies });
  },

  async create(req, res) {
    const genres = await Movie.getGenres();
    res.render("pages/register", { genres });
  },

  async save(req, res) {
    const movies = await Movie.get();
    const lastId = movies[movies.length - 1]?.id || 0;

    Movie.create({
      id: lastId + 1,
      ...req.body,
    });
    
    return res.redirect("/movies");
  },

  async show(req, res) {
    const movieId = req.params.id;
    const movies = await Movie.get();

    const movie = movies.find((movie) => Number(movie.id) === Number(movieId));

    //refatorar
    if (!movie) {
      return res.send("Movie not found :)");
    }

    return res.render("pages/movieEdit", { movie });
  },

  async update(req, res) {
    const movieId = req.params.id;
    const movies = await Movie.get();

    let movie = movies.find((movie) => Number(movie.movie_id) === Number(movieId));

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

    await Movie.update(updatedMovie);

    res.redirect("/movie/" + movieId);
  },

  delete(req, res) {
    const movieId = req.params.id;
    
    Movie.delete(movieId);    

    res.redirect("/movies");
  },
};
