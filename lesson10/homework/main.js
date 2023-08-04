function addDateTimeList(date, time) {
    const dateTimeObject = {date, time};
    dateTimeList.push(dateTimeObject);
    const listContainer = document.getElementById('dateTimeList');

    listContainer.innerText = '';
    dateTimeList.forEach((dateTime) => {
        let divElement = document.createElement("div");
        divElement.textContent = `${dateTime.date} - ${dateTime.time}`;
        listContainer.appendChild(divElement);
    })
    localStorage.setItem('dateTimeList', JSON.stringify(dateTimeList));
}

const dateTimeList = JSON.parse(localStorage.getItem('dateTimeList')) || [];

window.onload = function () {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const date = day + "." + month + "." + year;
    const hours = new Date().getHours();
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const time = hours + ":" + mins + ":" + seconds;
    addDateTimeList(date, time);
}

