/*let a = (a,b) => a + b
console.log(a(10, 20))*/

/*створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
{
    let Srectangle = (a, b) => a * b
    console.log(Srectangle(5, 4))
}
/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
{
const P = 3.14
let ac = (P, r) => P * r**2
console.log(ac(P, 5))
}
/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
{
    const P = 3.14
    let ac = function (P, r, h) {
        return 2 * (P * r) * (h + r)
    }
    console.log(ac(P, 3, 4))
}
/*
- створити функцію яка приймає масив та виводить кожен його елемент*/
{
    let a = [
        {name: 'Pasha', age: 25, login: 'WTBTH'},
        {name: 'Sasha', age: 23, login: 'V3GTRH'},
        {name: 'Peta', age: 22, login: 'V23TH'},
        {name: 'Misha', age: 44, login: 'FEB34'},
        {name: 'Olya', age: 23, login: 'TJTRB'},
        {name: 'Igor', age: 44, login: 'DAVVN'},
        {name: 'Jenya', age: 12, login: 'DQWDWQ'},
        {name: 'Igor', age: 54, login: 'ERYYJ5'},
        {name: 'Vanya', age: 22, login: 'F64NVH5'},
        {name: 'Sveta', age: 35, login: 'H57FN'}
        ]
    let b = function (arr) {
        for (let arrElement of arr) {
            console.log(arrElement)
        }
    }
    console.log(b(a))
}
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
{
    let a = function (txt) {
        let b = `<p>${txt}</p> `
        document.write(b)
        }
    console.log(a('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, esse!  '))
}
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
{
    let spisok = function (txtLi) {
        let a = `<ul>
        <li>${txtLi}</li>
        <li>${txtLi}</li>
        <li>${txtLi}</li>
    </ul>`
        document.write(a)
    }
    console.log(spisok('Список продуктов'))
}
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

{
        let sp = function (txt, dl) {
            document.write(`<ul>`);
            for (let i = 0; i < dl; i++) {
                document.write(`<li>${txt}</li>`)
            }
            document.write(`<ul/>`)
        }
        console.log(sp('dwq', 3))
}

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
{
    let foo = function (arr) {
        document.write(`<ul>`)
        for (let i = 0; i < arr.length; i++) {
            item = arr[i]
            document.write(`<li>${item}</li>`)

        }
        document.write(`</ul>`)
    }
    console.log(foo(['dqc', 14, true, false, 25.3]))
}
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
{
    let asd = [
        {id:123456, name: 'Sasha', age: 25},
        {id:765433, name: 'Olya', age: 43},
        {id:234566, name: 'Misha', age: 23},
        {id:976345, name: 'Pasha', age: 12},
        {id:345875, name: 'Lena', age: 53}
    ]

    function mas(obj) {
        for (let i = 0; i < obj.length; i++) {
            document.write(`<div>${obj[i].id}: ${obj[i].name} - ${obj[i].age}</div>`)
        }
    }
    console.log(mas(asd))
}
/*
- створити функцію яка повертає найменьше число з масиву*/
{

}