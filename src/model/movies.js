const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.all(`
    SELECT * 
    FROM movies m
    INNER JOIN genres g
    on m.genre_id = g.genre_id
    INNER JOIN parental_rating pr
    on m.parental_rating_id = pr.parental_rating_id
    ;`);

    await db.close();

    return data;
  },

  async getGenres(){
    const db = await Database();

    const genres = await db.all(`SELECT * FROM genres ORDER BY genre;`);

    await db.close();

    return genres;

  },

  async getParentalRating(){

    const db = await Database();

    const parental_rating = await db.all(`SELECT * FROM parental_rating;`);

    await db.close();

    return parental_rating;

  },

  async update(newMovie) {
    const db = await Database();

    await db.run(`
    UPDATE movies 
    SET title = "${newMovie.title}",
    year = ${newMovie.year},
    genre_id = ${newMovie.genre_id},
    parental_rating_id = ${newMovie.parental_rating_id},
    duration = "${newMovie.duration}",
    synopsis = "${newMovie.synopsis}"
    WHERE movie_id = ${newMovie.movie_id}
    ;`);

    await db.close();

  },

  async delete(movieId) {
    const db = await Database();
    
    await db.run(`
    DELETE FROM movies WHERE movie_id = ${movieId}
    ;`);

    await db.close();

  },

  async create(newMovie) {
    const db = await Database();

    await db.run(`
    INSERT INTO movies (title, year, genre_id, parental_rating_id, duration, synopsis)
    VALUES (
      "${newMovie.title}",
      ${newMovie.year},
      ${newMovie.genre},
      ${newMovie.parental_rating},
      "${newMovie.duration}",
      "${newMovie.synopsis}"
    )
    ;`);

    await db.close();    
    
  },
};
