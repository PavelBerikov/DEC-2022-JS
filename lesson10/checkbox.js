let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let checkBox1 = document.getElementById('1');
let checkBox2 = document.getElementById('2');
let checkBox3 = document.getElementById('3');
let div1 = document.getElementById('s1');
let div2 = document.getElementById('s2');
let div3 = document.getElementById('s3');
let filterByStatus = usersWithAddress.filter(value => value.status === false);
let filterByAge = usersWithAddress.filter(value => value.age >= 29);
let filterByCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
for (let item of filterByStatus) {
    let moreDiv1 = document.createElement('div');
    moreDiv1.innerText = `${item.name} - ${item.age} ID - ${item.id}`
    div1.append(moreDiv1)
}
for (let item of filterByAge) {
    let moreDiv2 = document.createElement('div');
    moreDiv2.innerText = `${item.name} - ${item.age} ID - ${item.id}`
    div2.append(moreDiv2)
}
for (let item of filterByCity) {
    let moreDiv3 = document.createElement('div');
    moreDiv3.innerText = `${item.name} - ${item.age} ID - ${item.id}`
    div3.append(moreDiv3)
}
checkBox1.addEventListener('change', function (eo) {
    div1.classList.toggle('hidden')
})
checkBox2.addEventListener('change', function (eo) {
    div2.classList.toggle('hidden')
})
checkBox3.addEventListener('change', function (eo) {
    div3.classList.toggle('hidden')
})