//variables //vars
const listaTweets = document.getElementById('lista-tweets')






//Event Listeners

eventListeners();
function eventListeners(){
    //cuando se envia el formulario // when form is send
    document.querySelector("#formulario").addEventListener('submit',agregarTweet);
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

}
