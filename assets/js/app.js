//variables //vars
const listaTweets = document.getElementById('lista-tweets')






//Event Listeners

eventListeners();
function eventListeners(){
    //cuando se envia el formulario // when form is send
    document.querySelector("#formulario").addEventListener('submit',agregarTweet);

    //borrar tweet // delet tweets
    listaTweets.addEventListener('click', borrarTweet)
    //contenido cargado // content loaded
    document.addEventListener('DOMContentLoaded',localStorageListo)
}

//Funciones


//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    //leer el valor de text tarea // taking the value of text tarea
    console.log('Formulario enviado')

    const tweet = document.getElementById('tweet').value
    //crear boton de eliminar // create delet button
    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'

    //crear el contenido y añadir el contenido a la lista
    // crate the content and add the content at the list
    const li = document.createElement('li')
    li.innerText = tweet
    li.appendChild(botonBorrar)//add the delete button 
    //agregando la lista al DOM //add list to the DOM
    listaTweets.appendChild(li)
    console.log(tweet);

    //Añadir a Local Storage // add to LocalStorage
    agregarTweetLocalStorage(tweet)
}

//delet tweet from the list
function borrarTweet(e){
    e.preventDefault()
    if(e.target.className  === 'borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('tweet eliminado')
    } 
    console.log('diste click en la lista')
}

//mostrar datos de local storage en la lista
//show dates from local storage in the list
function localStorageListo(){
    let tweets

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        
        const botonBorrar = document.createElement('a')
        botonBorrar.classList = 'borrar-tweet'
        botonBorrar.innerText = 'X'

        //crear el contenido y añadir el contenido a la lista
        // crate the content and add the content at the list
        const li = document.createElement('li')
        li.innerText = tweet
        li.appendChild(botonBorrar)//add the delete button 
        //agregando la lista al DOM //add list to the DOM
        listaTweets.appendChild(li)
    })
}

//agregar a local storage
function agregarTweetLocalStorage(tweet){
    let tweets
    tweets = obtenerTweetsLocalStorage()
    //añadir el nuevo tweet
    tweets.push(tweet)
    //convert from string to array for loca storage
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function obtenerTweetsLocalStorage(){
    let tweets
    //revisamos los valores de local storage
    //check local storage values
    if(localStorage.getItem('tweets') === null){
        tweets = []
    } else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}

