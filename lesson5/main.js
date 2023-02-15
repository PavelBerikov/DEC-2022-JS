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
    let ac = (P, r, h) => 2 * (P * r) * (h + r)
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
    let b =  (arr) => {for (let arrElement of arr) {console.log(arrElement)}}
    console.log(b(a))
}
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
{
    let a = (txt) => document.write(`<p>${txt}</p> `)
    console.log(a('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, esse!  '))
}
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
{
    let spisok = (txtLi) => document.write( `<ul>
                                                <li>${txtLi}</li>
                                                <li>${txtLi}</li>
                                                <li>${txtLi}</li>
                                            </ul>`)
    console.log(spisok('Список продуктов'))
}
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

{
    let sp = (txt, dl) => {document.write(`<ul>`);
        for (let i = 0; i < dl; i++)
        {document.write(`<li>${txt}</li>`)}
        document.write(`<ul/>`)}
    console.log(sp('dwq', 3))
}

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
{
    let foo = (arr) => { document.write(`<ul>`)
                            for (let i = 0; i < arr.length; i++) {
                                item = arr[i]
                                document.write(`<li>${item}</li>`)
                            }
                        document.write(`</ul>`)}
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

    let mas = (obj) => {
        for (let i = 0; i < obj.length; i++) {
            document.write(`<div>${obj[i].id}: ${obj[i].name} - ${obj[i].age}</div>`)
        }
    }
    console.log(mas(asd))
}
/*
- створити функцію яка повертає найменьше число з масиву*/
{
    let min = (numbers) => {
        a = numbers[0];
        for (let number of numbers) {
            if (a > number) {
                a = number
            }
        }
        return a
    }
    console.log(min([35, 11, 25,6, 1]))
}
/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
{
    let sum = (numArr) => {
        let a = 0;
        for (let num of numArr) {
            a = a + num;
        }
        return a
    }
    console.log(sum([1, 2, 3, 10, 20]))
}
/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
{
    let swop = (arr, id1, id2) => {
        let a = arr[id1];
        let b = arr[id2];
        arr[id1] = b;
        arr[id2] = a;
        return arr
    }
    console.log(swop([11,43,65,77],3, 2))
}
/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)*/
{
    let ex = (ua, cur, excur) => {
        for (let item of cur) {
            if (item.currency === excur) {
                return ua / item.value;
            }
        }
    }
    console.log(ex(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}], 'USD') )
}