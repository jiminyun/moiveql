let movies = [
  {
    id: 1,
    name: "logan",
    score: 99
  },

  {
    id: 2,
    name: "logan2",
    score: 99
  },
  {
    id: 3,
    name: "logan3",
    score: 99
  },

  {
    id: 4,
    name: "logan3",
    score: 99
  },
  {
    id: 5,
    name: "logan3",
    score: 99
  },
  {
    id: 6,
    name: "logan3",
    score: 99
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = movies.filter(movie => movie.id == id);
  return filterMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
