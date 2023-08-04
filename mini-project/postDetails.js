let url = new URL (location.href);
let json = url.searchParams.get('data');
let post = JSON.parse(json);

let htmlDivElement = document.createElement("div");
let htmlTitleElement = document.createElement("p");
let htmlParagraphElement = document.createElement("p");
htmlDivElement.innerHTML = `<h3>User ID - ${post.userId}, Post ID - ${post.id}</h3>`;
htmlTitleElement.innerHTML = `${post.title}`;
htmlParagraphElement = `${post.body}`;
htmlDivElement.append(htmlTitleElement, htmlParagraphElement);

document.body.appendChild(htmlDivElement);