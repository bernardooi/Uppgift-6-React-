
function getData(namn){
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=HSiBnrCzZkuoSIVgmJcYj8W5cIAw4aaR&q=${namn}&limit=25&offset=0&rating=g&lang=en`)// promise
        .then(data => data.json()) // efter promise körs .then 
        .then(data => data)
}

function getAPI2(search){
    return fetch(`https://tenor.googleapis.com/v2/search?q=${search}&key=AIzaSyBrlf330D6ldjfPhP1uC__0VUp25JVByQU&client_key=react&limit=20`)
    .then(data => data.json())
    .then(data => data)
}
