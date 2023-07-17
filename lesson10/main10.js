{
    let form = document.forms[0];
    let stopWords = ['fuck', 'cunt', 'fucking', 'pussy', 'dick', 'asshole', 'whore'];
    form.onsubmit = function (eo) {
        eo.preventDefault()
        for (let stopWord of stopWords) {
            if (form.word.value === stopWord) {
                alert('stop word')
            }
        }
    }
}
{
    let stopWords = ['fuck', 'cunt', 'fucking', 'pussy', 'dick', 'asshole', 'whore'];
    let form2 = document.forms[1];
    form2.onsubmit = function (eo){
        eo.preventDefault();
        let inputValue = form2.words.value;
        let split = inputValue.split(' ');
        for (let word of split) {
            for (let stopWord of stopWords) {
                if (word === stopWord){
                    alert('stop word in input')
                }
            }
        }
    }
}
{
    let form3 = document.forms[2];
    let button = document.getElementById('bt');
    let menu = document.getElementById('menu');

    button.onclick = function (eo){
        menu.classList.toggle('hidden')
    }
}
{
    let button2 = document.getElementById('bt2');
    button2.onclick = function (eo){
        eo.preventDefault()
        button2.classList.toggle('hidden');
    }
}
{
    const comments = [
        { title: 'Comment 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' },
        { title: 'Comment 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' },
        { title: 'Comment 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' },
        { title: 'Comment 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' },
        { title: 'Comment 5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' },
        { title: 'Comment 6', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ducimus ea. Aliquid consectetur delectus, deserunt ducimus iste itaque.' }
    ];
    for (let comment of comments) {
        let div = document.createElement("div");

        let paragraph = document.createElement("p");

        let button = document.createElement("button");

        paragraph.innerText = `${comment.body}`;

        div.innerText = `${comment.title}:`;

        button.innerText = 'hidden body'

        button.onclick = function (eo) {
            paragraph.classList.toggle('hidden');
        }
        div.append(paragraph, button)
        document.body.appendChild(div)

    }
}
