/*
console.log('start');





setTimeout(function () {
    console.log( 'log 1');
}, 1000);
setTimeout(function () {
    console.log('log 2')
}, 2000)

let intervalId = setInterval(function () {
    console.log('finish')
}, 1000);
clearInterval(intervalId)




console.log('end')*/
/*new Promise(resolve => {
    let x = 1;
    setTimeout( function (){
        console.log('st1');
        x++;
        resolve(x);
    }, 1000)
}).then( value => {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('st2');
            value++;
            resolve(value);
        },1000)
    })
}).then( value => {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('st3');
            console.log(value);
        }, 1000)
    })
})*/
/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts)
        //....DOMs create
    })*/
/*
let promisePosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());
let promiseUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());
Promise.all([promisePosts, promiseUsers])
    .then(value => console.log(value))
Promise.race([promisePosts, promiseUsers])
    .then(value => console.log(value))
Promise.any([promisePosts, promiseUsers])
    .then(value => console.log(value))*/
/*
async function request() {
    let promise =await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    console.log(promise)
}
request()*/