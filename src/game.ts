const menuRestart = document.querySelector('.interface-restart__button');
const gameField = document.querySelector('.gameField');
const popupBlock = document.querySelector('.popup');
const popupRestart = document.querySelector('.popup-content__button');
const time = document.getElementsByTagName('time')[0];
const ArrCardIndex = [
    '6',
    '7',
    '8',
    '9',
    '10',
    'валет',
    'дама',
    'король',
    'туз',
] as const;
const ArrCardSuits = ['бубны', 'крести', 'пики', 'черви'] as const;
var sec: number = 0;
var min: number = 0;
// eslint-disable-next-line no-unused-vars
var t: any;
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
        }
    }
}
function add() {
    tick();
    time.textContent =
        (min > 9 ? min : '0' + min) + '.' + (sec > 9 ? sec : '0' + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
function timerCicle() {
    time.textContent = '00.00';
    sec = 0;
    min = 0;
}
function generateCards() {
    gameField.innerHTML = '';
    const diffLevel = localStorage.getItem('diffLevel') as string;
    var cardCount: number = 0;
    if (!localStorage.getItem('diffLevel')) window.location.href = 'index.html';
    if (diffLevel === 'hard') cardCount = 36;
    else diffLevel === 'normal' ? (cardCount = 18) : (cardCount = 10);
    for (var i: number = 0; i < cardCount; i++) {
        gameField.innerHTML += `<img src="pics/cards/shirt.png" id='${i}' class="card" alt="shirt" /></img>`;
    }
}
function hideCards() {
    for (var i: number = 0; i < cards.length; i++) {
        document
            .getElementById(`${i}`)
            .setAttribute('src', `pics/cards/shirt.png`);
    }
}
function setCopyOfCard(el: Element, idCard: number, idSuit: number): void {
    el = document.getElementById(`${getRandomInt(cards.length)}`);
    if (el.getAttribute('alt') !== 'shirt')
        return setCopyOfCard(el, idCard, idSuit);
    else {
        el.setAttribute(
            'src',
            `/pics/cards/${ArrCardIndex[idCard]} ${ArrCardSuits[idSuit]}.png`
        );
        el.setAttribute(
            'alt',
            `${ArrCardIndex[idCard]} ${ArrCardSuits[idSuit]}`
        );
    }
}
function shuffleCards() {
    for (var i: number = 0; i < cards.length; i++) {
        var temp = document.getElementById(`${i}`) as HTMLElement;
        if (temp.getAttribute('alt') === 'shirt') {
            var cardIndex: number = getRandomInt(9);
            var cardSuit: number = getRandomInt(4);
            temp.setAttribute(
                'src',
                `/pics/cards/${ArrCardIndex[cardIndex]} ${ArrCardSuits[cardSuit]}.png`
            );
            temp.setAttribute(
                'alt',
                `${ArrCardIndex[cardIndex]} ${ArrCardSuits[cardSuit]}`
            );
            setCopyOfCard(temp, cardIndex, cardSuit);
        }
    }
}
generateCards(),
    sessionStorage.removeItem('buffer1'),
    sessionStorage.removeItem('buffer2');
var cards = document.querySelectorAll('.card') as NodeListOf<Element>;
shuffleCards(),
    setTimeout(timer, 5000),
    setTimeout(hideCards, 5000),
    setTimeout(gameplayLogic, 5000);
menuRestart.addEventListener('click', () => {
    timerCicle();
    window.location.href = 'index.html';
});
popupRestart.addEventListener('click', () => {
    popupBlock.setAttribute('style', 'display=none');
    sessionStorage.removeItem('buffer1');
    sessionStorage.removeItem('buffer2');
    timerCicle();
    clearTimeout(t);
    generateCards(),
        shuffleCards(),
        setTimeout(timer, 5000),
        setTimeout(hideCards, 5000),
        setTimeout(gameplayLogic, 5000);
});
function gameplayLogic() {
    var ArrDisabledCards: string[] = [];
    cards = document.querySelectorAll('.card');
    cards.forEach((element) => {
        element.addEventListener('click', () => {
            if (!ArrDisabledCards.includes(element.getAttribute('id'))) {
                if (
                    !sessionStorage.getItem('buffer1') &&
                    sessionStorage.getItem('buffer2') !==
                        element.getAttribute('id')
                ) {
                    sessionStorage.setItem(
                        'buffer1',
                        element.getAttribute('alt')
                    );
                    sessionStorage.setItem(
                        'buffer2',
                        element.getAttribute('id')
                    );
                    ArrDisabledCards.push(element.getAttribute('id'));
                    element.setAttribute(
                        'src',
                        `pics/cards/${element.getAttribute('alt')}.png`
                    );
                } else if (
                    sessionStorage.getItem('buffer1') ===
                        element.getAttribute('alt') &&
                    sessionStorage.getItem('buffer2') !==
                        element.getAttribute('id')
                ) {
                    sessionStorage.removeItem('buffer1');
                    ArrDisabledCards.push(element.getAttribute('id'));
                    element.setAttribute(
                        'src',
                        `pics/cards/${element.getAttribute('alt')}.png`
                    );
                    if (ArrDisabledCards.length === cards.length) {
                        clearTimeout(t);
                        document
                            .querySelector('.popup')
                            .setAttribute('style', 'display: flex;');
                        document.querySelector('.spentTime').textContent =
                            document.querySelector('.timerValue').textContent;
                    }
                } else if (
                    sessionStorage.getItem('buffer1') !==
                    element.getAttribute('alt')
                ) {
                    clearTimeout(t);
                    document
                        .querySelector('.popup')
                        .setAttribute('style', 'display: flex;');
                    document.querySelector('.result__title').textContent =
                        'Вы проиграли';
                    document
                        .querySelector('.result__img')
                        .setAttribute('src', 'pics/lost.svg');
                }
                document.querySelector('.spentTime').textContent =
                    document.querySelector('.timerValue').textContent;
            }
        });
    });
}
