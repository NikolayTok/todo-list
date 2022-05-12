const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

let todoData = []

const todoLoad = function () {
    let result = JSON.parse(localStorage.getItem('db'))

    if (!result) {
        result = []
    }

    return result
}

todoData = todoLoad()

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    todoData.forEach(function (item, index) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-remove').addEventListener('click', function () {
            todoData.splice(index, 1)
            render()
        })

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })
    })

    localStorage.db = JSON.stringify(todoData)
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    const newTodo = {
        text: headerInput.value,
        completed: false
    }

    todoData.push(newTodo)
    headerInput.value = ''

    render()
})


render();



