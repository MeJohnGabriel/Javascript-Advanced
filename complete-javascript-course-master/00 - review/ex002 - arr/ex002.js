"use strict";

const favoriteMovies = [
  "Star Wars",
  "Rocky",
  "Bolt",
  "Godzilla",
  "Jurassic World",
];

console.log(favoriteMovies);
console.log(favoriteMovies[0]);
console.log(favoriteMovies[4]);

favoriteMovies.push("Real Steal");
console.log(favoriteMovies[5]);

favoriteMovies.shift("Star Wars");
console.log(favoriteMovies);

console.log(favoriteMovies.indexOf(favoriteMovies));
