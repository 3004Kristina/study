// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// if(personalMovieDB.count < 10){
//     alert("Просмотрено довольно мало фильмов");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     alert("Вы классический зритель");
// } else if(personalMovieDB.count >= 30){
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

// function showMyDB (){
//     if(personalMovieDB.private === false){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres(){
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
//     }
// }
//
// writeYourGenres();

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt("На сколько оцените его?", "");
//
// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
//
// console.log(personalMovieDB);

// while (true) {
//     let nameMovie = prompt("Один из последних просмотренных фильмов?", ""),
//         rateMovie = prompt("На сколько оцените его?", "");
// }


// for (let i = 0; i < numberOfFilms; i++) {
//     let nameMovie = prompt("Один из последних просмотренных фильмов?", "");
//
//     while (nameMovie.length === 0 || nameMovie.length > 50) {
//         nameMovie = prompt("некорректное значение, введите название еще раз", "");
//     }
//
//     let rateMovie = +prompt("На сколько оцените его?", "");
//     while (rateMovie > 5 || rateMovie < 1){
//         rateMovie = +prompt("некорректное значение, введите оценку еще раз", "");
//     }
//
//     personalMovieDB.movies[nameMovie] = rateMovie;
// }
//
// console.log(personalMovieDB);

// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     showMyDB: function(){
//         if(personalMovieDB.private === false){
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function (){
//         for(let i = 1; i <= 3; i++){
//            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
//         if(genre === null || genre === ''){
//           console.log("Введено некорректное значение");
//           i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         }
//         personalMovieDB.genres.forEach((item, i) =>{
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//             });
//         }
//     },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB.private === false){
//             personalMovieDB.private = true;
//         } else {
//             personalMovieDB.private = false;
//         }
//     }
// };
//
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();

let str = '123456';
// let pairs = [];
//
// for (let i = 0; i < str.length; i += 2) {
//     pairs.push([
//         str[i],
//         str[i + 1]
//     ]);
// }
//
// console.log(pairs);
//
// console.log(pairs.map(pair => {
//     return pair.reverse().join('');
// }));
//
// console.log(pairs);
//
// console.log(pairs.map(pair => {
//     return pair.reverse().join('');
// }).join(''));
//
// console.log(pairs);
//
// console.log('123'.subs);

let result = '';

for (let i = 0; i < str.length; i += 2) {
    result += str[i + 1];
    result += str[i];
}

console.log(result);