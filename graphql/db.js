import axios from "axios";
const BASE_URL = "https://yts.am/api/v2";
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    }
  });

  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
};

// export const getMovies = (limit, rating) => {
//   let REQUEST_URL = API_URL;
//   if(limit > 0) {
//     REQUEST_URL += `?limit=${limit}`;
//   }
//   if(rating > 0) {
//     REQUEST_URL += `&minimum_rating=${rating}`
//   }

//   console.log(REQUEST_URL);

//   return fetch(`${REQUEST_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies);
// }
  

// let movies = [
//   {
//     id: 1,
//     name: "Avengers - The Infinity War",
//     score: 8
//   },
//   {
//     id: 2,
//     name: "The Incredible 2",
//     score: 9
//   },
//   {
//     id: 3,
//     name: "Mission Impossilbe - Fallout",
//     score: 9
//   },
//   {
//     id: 4,
//     name: "ILLANG : THE WOLF BRIGADE",
//     score: 1
//   },
//   {
//     id: 5,
//     name: "Along with the Gods: The Last 49 Days",
//     score: 6
//   }
// ]

// export const getMovies = () => movies;

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id);
//   return filteredMovies[0];
// }

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if(movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// }

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score
//   }
//   movies.push(newMovie);
//   return newMovie;
// }


// export const people = [
//   {
//     id: 0,
//     name: "Flowkater",
//     age: 27,
//     gender: "male"
//   },
//   {
//     id: 1,
//     name: "Ryan",
//     age: 25,
//     gender: "male"
//   },
//   {
//     id: 2,
//     name: "Duke",
//     age: 26,
//     gender: "male"
//   },
//   {
//     id: 3,
//     name: "Kong",
//     age: 24,
//     gender: "female"
//   }
// ]

// export const getById = id => {
//   const filteredPeople = people.filter(person => person.id === id);
//   return filteredPeople[0];
// }