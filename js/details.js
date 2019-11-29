const param = location.search;
const id = param.substr(4);

function getApi() {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        const response = JSON.parse(xhr.responseText);
        const data = response.data.results[0];
        console.log(data);

        document.getElementById('name').innerHTML = data.name;
        document.getElementById('image').setAttribute('src', data.thumbnail.path + '.' + data.thumbnail.extension);
        document.getElementById('description').innerHTML = data.description;
    }

    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/'+ id +'?apikey=7fd72987d56982ea7b712b0bf275fed4');
    xhr.send();
}

getApi();