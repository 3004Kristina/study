window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (e.target === item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // Timer

    const deadLine = '2020-09-30';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        /**
         * @TODO Remove ids and querySelector by id from timer container
         */
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        /**
         * @TODO function "getTimeRemaining" registered in global context, but
         *       function "updateClock" registered into "setClock" function body. Why?
         */
        function updateClock() {
            const t = getTimeRemaining(endtime);

            /**
             * @TODO replace getZero function with String.padStart
             */
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    // Modal

    const modalButton = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('[data-modal_Close]'); // @TODO replace strange syntax with camel case and underscore

    function modalRemove() {
        modal.classList.add('hide');
        modal.classList.remove('show');

        /**
         * @TODO replace style modification with classes
         */
        document.body.style.overflow = '';
    }

    modalButton.forEach(item => {
        item.addEventListener('click', (e) => {
            modal.classList.add('show');
            modal.classList.remove('hide');

            /**
             * @TODO replace style modification with classes
             */
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', modalRemove);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalRemove();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modalRemove();
        }
    });

    // Use Classes for cards

    class Menucard {
        constructor(src, alt, title, descr, usdPrice, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.usdPrice = usdPrice;
            this.price = null;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.usdPrice * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            element.innerHTML = document.getElementById('menu-item-template').innerHTML
                .replaceAll('{{src}}', this.src)
                .replaceAll('{{alt}}', this.alt)
                .replaceAll('{{title}}', this.title)
                .replaceAll('{{descr}}', this.descr)
                .replaceAll('{{price}}', this.price);

            // element.innerHTML = `
            //     <div class="menu__item">
            //         <img src="${this.src}" alt="${this.alt}">
            //         <h3 class="menu__item-subtitle">${this.title}</h3>
            //         <div class="menu__item-descr">${this.descr}</div>
            //         <div class="menu__item-divider"></div>
            //         <div class="menu__item-price">
            //             <div class="menu__item-cost">Цена:</div>
            //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            //         </div>
            //     </div>
            // `;

            this.parent.append(element);
        }
    }

    new Menucard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд:' +
        ' больше свежих овощей и фруктов. Продукт активных и здоровых людей. ' +
        'Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();
});
