/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
{
    let foo = (txt) => {
        console.log(txt.length)
    }
    foo('hello world')
    foo('lorem ipsum')
    foo('javascript is cool')
}
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
{
    let upper = (txt) => {console.log(txt.toUpperCase())};
    upper('hello world')
    upper('lorem ipsum')
    upper('javascript is cool')
}
/*
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
{
    let lowler = (txt) => {
        console.log(txt.toLowerCase())
    };
    lowler('HELLO WORLD')
    lowler('LOREM IPSUM')
    lowler('JAVASCRIPT IS COOL')
}
/*
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
{
    let str = ' dirty string   '
    console.log(str.trim())
}
/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.*/
{
    let stringToarray = (txt) => {console.log(txt.split(' '))}
    stringToarray('Ревуть воли як ясла повні')
}
/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
{
    let dsa = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let map = dsa.map((value) => {return value + ''});
    console.log(map)
}
/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.*/
{
    let arr = [11, 21, 3];
    let sortNums = (ar, direction) => {
        if (direction === 'ascending') {
            console.log(ar.sort((a, b) => a - b
            ))
        } else {
            (direction === 'descending')
            {
                console.log(ar.sort((a, b) => b - a))
            }
        }
    }
    sortNums(arr, 'descending')
}
/* відсортувати його за спаданням за monthDuration
 відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let sortMonth = coursesAndDurationArray.sort((a, b) => {
        return b.monthDuration - a.monthDuration
    })
    console.log(sortMonth)
    console.log(coursesAndDurationArray.filter((value, index) => value.monthDuration > 5))
    let coursesAndDurationArrayMAP = coursesAndDurationArray.map(function (value, index) {
        return {id: index + 1, ...value};
    });
    console.log(coursesAndDurationArrayMAP)


}


/*
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
*/
{
    let cards = [
        {cardSuit: 'spade', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},
        {cardSuit: 'diamond', value: '6', color: 'red'},
        {cardSuit: 'diamond', value: '7', color: 'red'},
        {cardSuit: 'diamond', value: '8', color: 'red'},
        {cardSuit: 'diamond', value: '9', color: 'red'},
        {cardSuit: 'diamond', value: '10', color: 'red'},
        {cardSuit: 'diamond', value: 'jack', color: 'red'},
        {cardSuit: 'diamond', value: 'queen', color: 'red'},
        {cardSuit: 'diamond', value: 'king', color: 'red'},
        {cardSuit: 'diamond', value: 'ace', color: 'red'},
        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'},
    ]

    console.log( cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace' ))
    console.log(cards.filter(value => value.value === '6'))
    console.log(cards.filter(value => value.color === 'red' ))
    console.log( cards.filter(value => value.cardSuit === 'diamond' ))
    console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value >= 9 || Number.isNaN(+card.value) )))


}
/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}
=========================*/

