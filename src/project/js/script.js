/* Задания на урок:

 1) Удалить все рекламные блоки со страницы (правая часть сайта)

 2) Изменить жанр фильма, поменять "комедия" на "драма"

 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
 Реализовать только при помощи JS

 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
 Отсортировать их по алфавиту

 5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
 новый фильм добавляется в список. Страница не должна перезагружаться.
 Новый фильм должен добавляться в movieDB.movies.
 Для получения доступа к значению input - обращаемся к нему как input.value;
 P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
 "Добавляем любимый фильм"

 5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const advDelete = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('ul.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    let arr = [];

    function arrDelete(arr) {
        arr.forEach((elem) => {
            elem.remove();
        });
    }

    function someChanges(elem, parent) {
        elem.textContent = 'драма';
        parent.style.backgroundImage = 'url("img/bg.jpg")';
    }

    function shortLength(str) {
        if (str.length > 21) {
            str = `${str.substring(0, 22)}...`;
        }
        return str;
    }

    function createMovieList(arr, movieList) {
        arr.sort();
        movieList.innerHTML = '';
        arr.forEach((item, i) => {
            let shortMovieName = shortLength(item);
            movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${shortMovieName}
                                    <div class="delete"></div>
                                </li>`;
        });
    }

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        arr.push(addInput.value);
        createMovieList(arr, movieList);
        e.target.reset();

    });

    someChanges(promoGenre, promoBg);
    arrDelete(advDelete);
});


// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             'Логан',
//             'Лига справедливости',
//             'Ла-ла лэнд',
//             'Одержимость',
//             'Скотт Пилигрим против всех и всех'
//         ]
//     };
//
//     const adv = document.querySelectorAll('.promo__adv img');
//     adv.forEach(item => {
//         item.remove();
//     });
//
//     const promoBg = document.querySelector('.promo__bg'),
//         promoGenre = promoBg.querySelector('.promo__genre');
//
//     promoGenre.textContent = 'драма';
//     promoBg.style.backgroundImage = 'url(\'img/bg.jpg\')';
//
//
//     const $movieList = document.querySelector('.promo__interactive-list');
//
//     let $addForm = document.querySelector('form.add'),
//         addInput = $addForm.querySelector('.adding__input'),
//         checkbox = $addForm.querySelector('[type=\'checkbox\']');
//
//     $addForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let film = addInput.value;
//         let favorite = checkbox.checked;
//
//         if (favorite) {
//             console.log('Добавляем любимый фильм');
//         }
//
//         if (film) {
//             movieDB.movies.push(film);
//
//             createMovieList(movieDB.movies, $movieList);
//
//             e.target.reset();
//         }
//     });
//
//     function filmLength(str) {
//         if (str.length > 21) {
//             str = `${str.substring(0, 22)}...`;
//         }
//
//         return str;
//     }
//
//     function sortArr(arr) {
//         arr.sort();
//     }
//
//     function createMovieList(films, $list) {
//         $list.innerHTML = '';
//
//         sortArr(films);
//
//         films.forEach((movie, i) => {
//             let shortName = filmLength(movie);
//
//             $list.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${shortName}
//                                 <div class="delete"></div>
//                             </li>`;
//         });
//
//         $list.querySelectorAll('.promo__interactive-item .delete').forEach(($btn, i) => {
//             $btn.addEventListener('click', () => {
//                 $btn.parentElement.remove();
//
//                 films.splice(i, 1);
//
//                 createMovieList(films, $list);
//             });
//         });
//     }
//
//     createMovieList(movieDB.movies, $movieList);
// });





