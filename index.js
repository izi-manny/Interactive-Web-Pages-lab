// console.log("Hello world")

const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    console.log(inputField)

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    
    movieTitle.textContent = inputField.value
    // console.log(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    // console.log(movie)
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


    const list = document.querySelector('ul')
    // movie.appendChild(ul) //Wrong way
    list.appendChild(movie)


    inputField.value = '';
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
    revealMessage()
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

function crossOffMovie(event){
    event.target.classList.toggle("checked")

    if (event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`

    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
}