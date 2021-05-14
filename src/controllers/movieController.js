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
    await Movie.create({      
      ...req.body,
    });   
    
    return res.redirect("/movies");
  },

  async show(req, res) {
    const movieId = req.params.id;
    const movies = await Movie.get();
    const genres = await Movie.getGenres();

    const movie = movies.find((movie) => Number(movie.movie_id) === Number(movieId));

    //refatorar
    if (!movie) {
      return res.send("Movie not found :)");
    }

    return res.render("pages/movieEdit", { movie, genres });
  },

  async update(req, res) {
    const movieId = req.params.id;
    
    const updatedMovie = {
      movie_id: movieId,      
      title: req.body.title,
      year: req.body.year,
      genre_id: req.body.genre,
      parental_rating: req.body.parental_rating,
      duration: req.body.duration,
      synopsis: req.body.synopsis
    };
    
    await Movie.update(updatedMovie);

    res.redirect("/movie/" + movieId);
  },

  async delete(req, res) {
    const movieId = req.params.id;
    
    await Movie.delete(movieId);    

    res.redirect("/movies");
  },
};
