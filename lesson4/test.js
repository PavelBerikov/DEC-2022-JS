/*
/!*let a = (a,b) => a + b
console.log(a(10, 20))*!/
{
    function foobar() {
        console.log(arguments)
        if (arguments.length === 3) {
            return arguments[0] + arguments[1] + arguments[2];
        } else if (arguments.length === 4) {
            return (arguments[0] + arguments[1] + arguments[2]) * 2
        }
    }

    console.log(foobar(1, 2, 3, 2))
}
{
    let users = {
        name: 'vasya',
        age: 32,
        greet: function (msg) {
            console.log(this)
            return `${msg} my name is ${this.name}`
        },
        myage: (msg) => `${msg} im ${users.age} years old`
    }
    console.log(users.greet('hi'))
    console.log(users.myage('hello'))
}
/!*{
    function get(ttl, txt, pr) {
        let html = `<div>
        <h1>${ttl}</h1>
        <h4> ${txt} </h4>
        <p> ${pr}</p>
        </div>`
        document.write(html)
    }

    console.log(get('Hello', 'Privet Pasha kak', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vitae.'))
}*!/
/!*
{
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    function looper(arr) {
        for (let element of arr) {
            console.log(element)
        }
    }
    console.log(looper(users))
}*!/
{
    let cul = function (num1, num2) {

        return num1 + num2;
        let a = result

    }
    console.log(cul(11,22))

}
{
    let superculc = function (num1, num2) {
        let obj = {
            sum: num1 + num2,
            min: num1 - num2
        }
        return obj
    }
    let x = superculc(20, 10)
    console.log(x)
}

{
    function stip() {
        let a = 0;
        for (const num of arguments) {
            a = a + num

        }
        return a
    }

    console.log(stip(1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 4, 6, 4, 3, 5, 9))
}
{
    function creatorusers(name) {
        let user = {name: name}
        return user
    }

    let u1 = creatorusers('vasya')
    console.log(u1)
    u1.name = 'lena'
    console.log(u1)
}
{
    let l = 0
    let k = 10
    while (l < k) {
        document.write('ddwdwqd')
        l++
    }
}
/!*
{
    const liQuantity = 10
    const liText = 'element'

for (let i = 0; i < liQuantity; i++) {
    document.createElement(‘li’)
    li.innerText = liText
}
}*!/
/!*let spisok = function (txtLi) {
    let a = `<ul>
        <li>${txtLi}</li>
        <li>${txtLi}</li>
        <li>${txtLi}</li>
    </ul>`
    document.write(a)
}
console.log(spisok('Список продуктов'))*!/

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
/!*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*!/
function asd(arr) {
    for (let i = 0; i < arr.length; i++) {

      /!*document.write(`<div>${arr[i]}</div>`)*!/

    }
}
console.log(asd([12, 14, 43, 54, 45]))


{
    function minNum(numbers) {
        let min = numbers[0];
        for (const number of numbers) {
            console.log(number);
            if (min > numbers) {
                min = numbers
            }
        }
        return min
    }

    minNum([4, 6, 10, 25])
}
{
    function sum(numbers) {
        let basket = 0;
        for (let number of numbers) {
            basket = basket + numbers;
        }
        return basket
    }
    console.log(sum([3, 4, 2, 16]))
}
{
    function swop(arr, index1, index2) {
        let v1 = arr[index1]
        let v2 = arr[index2]
        arr[index1] = v2;
        arr[index2] = v1;
    }
}
{
    function ex(ua, curren, exit) {
        for (const item of curren) {
            if (item.currency === exit) {
                return  ua / item.value;
            }
        }
    }


    exchange(
        10000,
        [
            {currency:'USD',value:40},
            {currency:'EUR',value:42}
        ],
        'USD')
}
*/


function sum(numArr) {
   let a = 0;
    for (let num of numArr) {
        a = a + num;
    }
    return a
}
console.log(sum([1, 2, 3, 10, 20]))

{
    function swop(arr, id1, id2) {
        let a = arr[id1];
        let b = arr[id2];
        arr[id1] = b;
        arr[id2] = a;
        return arr
    }
    console.log(swop([11,43,65,77],3, 2))
}
{
    function ex(ua, cur, excur) {
        for (let item of cur) {
            if (item.currency === excur) {
                return ua / item.value;
            }
        }
    }
    console.log(ex(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}], 'USD') )
}
