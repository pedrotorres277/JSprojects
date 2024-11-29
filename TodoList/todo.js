const form = document.getElementById("form");
const input = document.getElementById('input');
const add = document.getElementById('button')

add.addEventListener("click", (e) => {
    e.preventDefault()

    if(input.value != ""){
    const newContainer = document.createElement('div');
    newContainer.classList.add("new-container")
    
    // container criado

    const newTask = document.createElement("div")
    newTask.innerHTML = `${input.value}`
    newTask.classList.add("new-task")

    // tarefa adicionada

    const deleteTask = document.createElement("button")
    deleteTask.innerHTML = "DEL"
    deleteTask.classList.add("delete-task")

    // delete adicionado

    deleteTask.addEventListener('click', () => {
        newContainer.remove()
    })

    // remover container

    const completedTask = document.createElement("button")
    completedTask.innerHTML = "✔️"
    completedTask.classList.add("completed-task")

    // verificar task

    completedTask.addEventListener('click', (e) => {
        e.preventDefault()
        newTask.style.textDecoration = "line-through"
    })

    // riscar task concluida

    form.appendChild(newContainer)
    newContainer.appendChild(completedTask)
    newContainer.appendChild(newTask)
    newContainer.appendChild(deleteTask)

    // adicionar ao HTML

    input.value = ""
    }
    else{
        alert('Insira uma task')
    }
})
