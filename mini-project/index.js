let url = new URL (location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);


let htmlDivElement = document.createElement("div");
htmlDivElement.innerHTML = `Id-${user.id} : ${user.name} <p>Username - ${user.username}</p><h4>${user.email}</h4> Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}<p>Zipcode -  ${user.address.zipcode}</p>`
let htmlAnchorElement = document.createElement("a");
let htmlButtonElement = document.createElement("button");
htmlButtonElement.innerHTML = `post of current user`;
htmlAnchorElement.appendChild(htmlButtonElement);
htmlDivElement.appendChild(htmlAnchorElement)
document.body.appendChild(htmlDivElement)
let titlesDiv = document.createElement("div");
titlesDiv.classList.add('titles');
document.body.appendChild(titlesDiv);
fetch(`https://jsonplaceholder.typicode.com/users/` + `${user.id}` + `/posts`).then(value => value.json())
    .then(posts => {
        for (let i = 0; i < posts.length; i++) {
            let titleDiv = document.createElement("div");
            titleDiv.innerHTML = `${i + 1} - ${posts[i].title}, ${posts[i].id}`;
            let detailsLink = document.createElement("a");
            detailsLink.href = `postDetails.html?data=` + JSON.stringify(posts[i])
            let button2 = document.createElement("button");
            button2.classList.add('but2');
            button2.innerHTML = `Post details`;
            detailsLink.appendChild(button2);
            titleDiv.appendChild(detailsLink);
            titlesDiv.appendChild(titleDiv);
            htmlButtonElement.onclick = function (eo) {
                eo.preventDefault();
                titlesDiv.classList.toggle('titles')

            }
        }
    });




/*
button.onclick = function (eo){
    menu.classList.toggle('hidden')
}*/
