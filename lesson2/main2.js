/*
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
{
    let a = [15, 'privet', 9 < 10, 293, 'red', 0 == 1, 'green', 89, 91, '123']
    console.log(a[0])
    console.log(a[1])
    console.log(a[2])
    console.log(a[3])
    console.log(a[4])
    console.log(a[5])
    console.log(a[6])
    console.log(a[7])
    console.log(a[8])
    console.log(a[9])
}
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
{
    let book1 = {
        title: 'last wish',
        pageCount: 500,
        genre: 'fantasy'
    }
    let book2 = {
        title: 'Sword of destiny',
        pageCount: 450,
        genre: 'fantasy'
    }
    let book3 = {
        title: 'Elven blood',
        pageCount: 650,
        genre: 'fantasy'
    }
    console.log(book1, book2, book3)
}
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
{
    let book1 = {title: 'The Picture of Dorian Grey', pageCount: 320, genre: 'Gothic literature', authors: ['Oscar Wilde', 36]}
    let book2 = {title: 'Snuff', pageCount: 260, genre: 'Erotic literature', authors: ['Charles Michael «Chuck» Palahniuk', 40]}
    let book3 = {title: 'The Old Man and The Sea', pageCount: 220, genre: 'maritime fiction', authors: ['Ernest Hemingway', 45]}
    console.log(book1, book2, book3);
    console.log(book1.authors[0])
}
/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
пароль кожного користувача*/
{
    let user = [
        {name: 'Pasha', username: 'NoooB', password: 'h47fndh'},
        {name: 'Sasha', username: 'Sweet', password: '7fh46dbs'},
        {name: 'Misha', username: 'apple12', password: 'md83md'},
        {name: 'Katya', username: 'loop', password: '29mfj7vs'},
        {name: 'Lena', username: 'Poleno', password: '127gnvj'},
        {name: 'Vasya', username: 'Witcher', password: 'n5n7n43'},
        {name: 'Mia', username: 'Zona117', password: 'nyc326'},
        {name: 'Albina', username: 'arbat64', password: 'coi3434c687'},
        {name: 'Vika', username: '12krot12', password: 'c426rv'},
        {name: 'Jhon', username: 'azkaban', password: '3cmfh7'},
    ]
    let user1 = user[0]
    let user2 = user[1]
    let user3 = user[2]
    let user4 = user[3]
    let user5 = user[4]
    let user6 = user[5]
    let user7 = user[6]
    let user8 = user[7]
    let user9 = user[8]
    let user10 = user[9]
    console.log(user1.password, user2.password, user3.password, user4.password, user5.password, user6.password, user7.password, user8.password, user9.password)

}
/*
- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0,
    -3*/
{
    let x = -3;
if (x !== 0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}
}
/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
число
(в першу, другу, третю или четверту частину години).*/
{
    let time = 44
    if (time < 0) {
        console.log('Помилка')
}else if (time <= 15) {
        console.log('Перша четверть')
    }else if (time <= 30) {
        console.log('Друга четверть')
    }else if (time <= 45) {
        console.log('Третя четверть')
    }else if (time <= 59) {
        console.log('Четверта четверть')
    } else {
        console.log('Помилка')
    }
}
/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у
першу, другу чи третю).*/
{
    let day = 20
    if (day < 0) {
        console.log('Помилка')
    }else if (day <= 10) {
        console.log('Перша декада')
    }else if (day <=20) {
        console.log('Друга декада')
    }else if (day <= 31) {
        console.log('Третя декада')
    }else {
        console.log('Помилка')
    }
}
/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
    відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
{
    let a = prompt('День тиждня')
    switch (a) {
        case '7':
            console.log('Sunday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '2':
            console.log('Tueday');
            break;

        case '1':
            console.log('Mondey');
            break;
        default:
            console.log('Er')
    }
}
/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/
{
    let a = prompt('Число 1')
    let b = prompt('Число 2')
    if (a === b) {
        console.log('Числа рівні')
    } else if (a < b) {
        console.log(b)
    } else {
        console.log(a)
    }
}
/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код який,
    за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy
(хибноподібні, тобто приводиться до false)
*/
{
    let x;
    x = 0
    let y = !!x || 'default'

    console.log(y)
}
/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"*/
{
    let x = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let x1 = x[0].monthDuration
    let x2 = x[1].monthDuration
    let x3 = x[2].monthDuration
    let x4 = x[3].monthDuration
    let x5 = x[4].monthDuration
    let x6 = x[5].monthDuration
    if (x1 < 6) {console.log(x1)}else {console.log('super')}
    if (x2 < 6) {console.log(x2)}else {console.log('super')}
    if (x3 < 6) {console.log(x3)}else {console.log('super')}
    if (x4 < 6) {console.log(x4)}else {console.log('super')}
    if (x5 < 6) {console.log(x5)}else {console.log('super')}
    if (x6 < 6) {console.log(x6)}else {console.log('super')}
}