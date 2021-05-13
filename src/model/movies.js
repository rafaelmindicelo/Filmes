let data = [
    {
      id: 1,
      title: "Batman vs Superman: A Origem da Justiça",
      year: 2016,
      genre: "Ação/Aventura",
      parental_rating: 12,
      duration: "3h3m",
      synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 2,
      title: "Vingadores: Ultimato",
      year: 2019,
      genre: "Ação/Ficção científica",
      parental_rating: 13,
      duration: "3h2m",
      synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ]

  module.exports = {
    get(){
      return data;
    },

    update(newMovie){
      return data = newMovie;
    },

    delete(movieId){
      data = data.filter((movie) => Number(movie.id) !== Number(movieId));
    },

    create(newMovie){
      data.push(newMovie);
    }
  }