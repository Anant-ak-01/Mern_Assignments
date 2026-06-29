function GetPostData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((value) => {
        console.log(value);
    }).catch(error => {
        console.log(error)
    })
}
async function GetComment(){
    let resp = await fetch("https://jsonplaceholder.typicode.com/comments")
    resp = await resp.json()
    console.log(resp)
}

async function GetAlbums(){
    let resp = await fetch("https://jsonplaceholder.typicode.com/albums")
    resp = await resp.json()
    console.log(resp)
}

async function GetPhotos(){
    let resp = await fetch("https://jsonplaceholder.typicode.com/photos")
    resp = await resp.json()
    console.log(resp)
}
async function  GetToDo(){
    let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    resp = await resp.json();
    console.log(resp)
}
async function GetUsers(){
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    resp = await resp.json();
    console.log(resp)
}