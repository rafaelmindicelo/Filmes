const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.all(`
    SELECT * 
    FROM movies m
    INNER JOIN genres g
    on m.genre_id = g.genre_id
    ;`);

    await db.close();

    return data;
  },

  async getGenres(){
    const db = await Database();

    const genres = await db.all(`SELECT * FROM genres;`);

    await db.close();

    return genres;

  },

  async update(newMovie) {
    const db = await Database();

    await db.run(`
    UPDATE movies 
    SET title = "${newMovie.title}",
    year = ${newMovie.year},
    genre_id ${newMovie.id},
    parental_rating ${newMovie.parental_rating},
    duration "${newMovie.duration}",
    synopsis "${newMovie.synopsis}"
    WHERE movie_id = ${newMovie.movie_id}
    ;`)

    await db.close();

    return (data = newMovie);
  },

  delete(movieId) {
    //const db = await Database();
    data = data.filter((movie) => Number(movie.id) !== Number(movieId));
  },

  create(newMovie) {
    //const db = await Database()
    data.push(newMovie);
  },
};
