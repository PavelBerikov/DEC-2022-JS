fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let divElement = document.createElement("div");
            divElement.classList.add('target');
            divElement.innerHTML = `<h3>${user.id} - ${user.name}</h3>`;
            let htmlButtonElement = document.createElement("button");
            let indexLink = document.createElement("a");
            indexLink.href = 'index.html?data=' + JSON.stringify(user)
            indexLink.appendChild(htmlButtonElement)
            htmlButtonElement.classList.add('but')
            htmlButtonElement.innerHTML = `More`;
            divElement.appendChild(indexLink)
            document.body.appendChild(divElement);
        }
    })