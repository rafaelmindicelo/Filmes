const Movie = require("../model/movies");

module.exports = {
  async index(req, res) {
   
    const movies = await Movie.get();
    
    res.render("pages/movies", { movies });
  },

  async create(req, res) {
    const genres = await Movie.getGenres();
    const parental_rating = await Movie.getParentalRating();
    res.render("pages/register", { genres, parental_rating });
  },

  async save(req, res) {
    
    const title = req.body.title;
    const year = req.body.year;
    const genre = req.body.genre;    
    const duration = req.body.duration;
    const synopsis = req.body.synopsis;
    const current_year = new Date().getFullYear();

    if(title.trim() === "" || duration.trim() === "" || synopsis.trim() === ""){
      return res.status(400).json({ error: "Obrigatório preencher todos os campos." });
    }

    if(Number(year) < 1888 || Number(year) > current_year){
      return res.status(400).json({ error: `${year} é um ano de lançamento inválido.`});
    }

    if(Number(genre) === 0){
      return res.status(400).json({ error: "Selecione o gênero do filme."});
    }

    await Movie.create({      
      ...req.body,
    });   
    
    return res.redirect("/movies");
  },

  async show(req, res) {
    const movieId = req.params.id;
    const movies = await Movie.get();
    const genres = await Movie.getGenres();
    const parental_rating = await Movie.getParentalRating();

    const movie = movies.find((movie) => Number(movie.movie_id) === Number(movieId));
    
    //refatorar
    if (!movie) {
      return res.send("Movie not found :)");
    }

    return res.render("pages/movieEdit", { movie, genres, parental_rating });
  },

  async update(req, res) {
    const movieId = req.params.id;

    const title = req.body.title;
    const year = req.body.year;
    const genre_id = req.body.genre;
    const parental_rating_id = req.body.parental_rating    
    const duration = req.body.duration;
    const synopsis = req.body.synopsis;
    const current_year = new Date().getFullYear();

    if(title.trim() === "" || duration.trim() === "" || synopsis.trim() === ""){
      return res.status(400).json({ error: "Obrigatório preencher todos os campos." });
    }

    if(Number(year) < 1888 || Number(year) > current_year){
      return res.status(400).json({ error: `${year} é um ano de lançamento inválido.`});
    }

    if(Number(genre_id) === 0){
      return res.status(400).json({ error: "Selecione o gênero do filme."});
    }
    
    const updatedMovie = {
      movie_id: movieId,      
      title,
      year,
      genre_id,
      parental_rating_id,
      duration,
      synopsis
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
