let offset = 0;
function getApi() {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        const response = JSON.parse(xhr.responseText);
        const data = response.data.results;
        console.log(data);

        for(let i = 0; i < data.length; i++) {

            if(!data[i].thumbnail.path.includes('image_not_available')) {
                document.getElementById('images').innerHTML += "<div class='col-sm-3 offset-1'><a href='details.html?id="+ data[i].id +"'><img src='"+ data[i].thumbnail.path + '.' + data[i].thumbnail.extension +"' class='w-75 h-75 img-thumbnail coucou rounded shadow-lg'></a><h4 class='text-white'>"+ data[i].name +"</h4></div>";
            }
        }
    }

    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?limit=50&offset='+ offset +'&apikey=7fd72987d56982ea7b712b0bf275fed4');
    xhr.send();
}

getApi();

document.getElementById('button').addEventListener('click', function() {
    offset += 50;
    getApi();
});