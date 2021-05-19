const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
CREATE TABLE genres (
  genre_id INTEGER PRIMARY KEY AUTOINCREMENT,
  genre TEXT  
);
`);

    await db.exec(`
CREATE TABLE parental_rating(
  parental_rating_id INTEGER PRIMARY KEY AUTOINCREMENT,
  parental_rating TEXT
);
`);

    await db.exec(`
CREATE TABLE movies (
  movie_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INT(4),
  genre_id INT,
  parental_rating_id INT,
  duration TEXT(5),
  synopsis TEXT,
  CONSTRAINT fk_GenreId FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
  CONSTRAINT fk_ParentalRatingId FOREIGN KEY (parental_rating_id) REFERENCES parental_rating(parental_rating_id)
  );
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Ação/Aventura");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Comédia");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Dança");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Documentário");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Drama");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Ficção");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Romance");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Suspense");
`);

    await db.run(`
INSERT INTO genres (genre)
VALUES ("Terror");
`);

    await db.run(`
INSERT INTO movies (title, year, genre_id, parental_rating, duration, synopsis)
VALUES (
  "Batman vs Superman: A Origem da Justiça",
  2016,
  1,
  12,
  "3h3m",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
);
`);

    await db.run(`
INSERT INTO movies (title, year, genre_id, parental_rating, duration, synopsis)
VALUES (
  "Vingadores: Ultimato",
  2019,
  1,
  14,
  "3h2m",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
);
`);

    await db.close();
  },
};

initDb.init();
