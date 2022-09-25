var fs = require('fs');
const filePath = 'db.json'

function fileChecker() {
    fs.existsSync(filePath) ? false : fs.writeFileSync(filePath, JSON.stringify([]))
}


function handleAdd(todo) {
    fileChecker()
    const todos = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    // const id = Math.floor(Math.random() * 100) + 1;
    const id = (todos[todos.length - 1].id)++

    const { title, body } = todo

    const newTodo = {
        title,
        body,
        id,
        checked: false
    }

    const addTodo = [...todos, newTodo];
    const stringfiedTodos = JSON.stringify(addTodo);

    fs.writeFile(filePath, stringfiedTodos, function (err) {

        if (err) throw err;
    });

}

function handleUpdate(id, todoBody) {
    const todos = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    let newTodos = []
    const found = todos.some(el => el.id == id)
    if (!found) return false


    let todo = todos.filter((element, index, arr) => {
        if (element.id == id) {
            return element
        }
        else {

            newTodos = [...newTodos, element]
        }

    })

    const { title, body, checked } = todoBody

    const updatedTodo = {
        title: title || todo[0].title,
        body: body || todo[0].body,
        id,
        checked: checked == undefined ? todo[0].checked : checked

    }
    newTodos = [...newTodos, updatedTodo];
    const stringfiedTodos = JSON.stringify(newTodos);


    fs.writeFileSync(filePath, stringfiedTodos, function (err) {

        if (err) throw err;
    });


}

function handleRemove(id) {
    const todos = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const todosAfterRemoved = todos.filter((elem, index, arr) => {
        if (elem.id !== id) {
            return true
        }
    })

    const stringfiedTodos = JSON.stringify(todosAfterRemoved);
    fs.writeFileSync(filePath, stringfiedTodos, function (err) {

        if (err) throw err;
    });


}


function handleList() {
    const todos = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const parsedTodos = todos.map((element) => {
        const { title, body, checked } = element
        // console.log(`title: ${title} body: ${body}, checked ${checked}`)
        return { title, body, checked }
    })
    return parsedTodos
}

function handleListCompleted(query) {
    const todos = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const checkedTodos = todos.filter((element, index, arr) => {
        if (element.checked === query)
            return true


    })
    return checkedTodos
}
function handleListUnCompleted(todos) {
    console.log("List All Todos")
}

module.exports = {
    handleAdd, handleRemove, handleUpdate, handleList, fileChecker,
    handleListCompleted, handleListUnCompleted
}