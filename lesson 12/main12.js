/*
let url = new URL (location.href);
console.log(url.searchParams.get('name'))*/


/*

let form = document.forms[0];
form.onsubmit = function (eo) {
    eo.preventDefault()
    let userId = form.userId.value;
    let title = form.title.value;
    let body = form.body.value;
    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

}*/

fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(posts =>{
    let divElement = document.createElement("div");
    for (const post of posts) {
        let divElement = document.createElement("div");
        let a = document.createElement("a");
        a.innerText = `${post.id} - ${post.title}`;
        a.href = 'posts.html?data=' + JSON.stringify(post)
        divElement.append(a)
        document.body.appendChild(divElement);

    }
})