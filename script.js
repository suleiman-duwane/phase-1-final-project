const form = document.getElementById("my-form")
const nameInput = document.getElementById("name-input")
const weightInput = document.getElementById("weight-input")
const descriptionInput = document.getElementById("description-input")
const imageInput = document.getElementById("image-input")

document.addEventListener("DOMContentLoaded", () =>{
    fetchAnimalsData()
})
form.addEventListener("submit", handleSubmit)

function fetchAnimalsData(){
    fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(animals => renderanimals(animals))
}

function renderanimals(animals){
    animals.forEach((animal)=>{
        const cardDiv = document.getElementById("animal-cards")
        const newDiv = document.createElement("div")
        newDiv.className = "new-div"
        newDiv.innerHTML = `
            <img src=${animal.imageLink} class="images" alt="">
            <h3>${animal.name}</h3>
            <p>${animal.description} </p>
        `
        cardDiv.appendChild(newDiv)
    })
}


function handleSubmit(e){
    e.preventDefault();
    let newAnimal = {
        name: nameInput.value,
        weight: weightInput.value,
        description: descriptionInput.value,
        imageLink: imageInput.value
    }

    console.log(newAnimal);
    fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnimal)
    })
}
