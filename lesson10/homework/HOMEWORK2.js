{
  /*  let form = document.forms[0];
    form.onsubmit = function (eo) {
        eo.preventDefault();
        let divElement = document.createElement("div");
        divElement.innerHTML = `<h3>${form.name.value} ${form.surname.value}</h1><h6>${form.age.value}</h6>`;
        document.body.appendChild(divElement);
    }*/
}
{

    window.onload = function () {
        let count = localStorage.getItem('count') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('count', count)
    }


    let div = document.getElementsByClassName('target')[0];
    div.innerHTML = `${localStorage.getItem('count')}`


}
{
  /*  let arr = [1, 2, 3, 4, 5, 6];
    arr.forEach((value, index, array) => array[index] = value + 1)
    console.log(arr)*/


}
