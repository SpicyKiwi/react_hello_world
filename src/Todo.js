import React, { useState } from 'react'

const TodoForm = (props) => {

    const addTodo = props.addTodo

    const [newTodo, setNewTodo] = useState("")

    return <form className="todo-form">

            <input 
            type="text" 
            value={newTodo} 
            onChange={(event) => {
                let value = event.target.value
                setNewTodo(value)
            }} 
            placeholder="What do you need to do?"/>

            <button type="button" onClick={() => {
                console.log(newTodo)
                addTodo(newTodo)
                setNewTodo('')
            }}>Add to list</button>
            
        </form>
}

const TodoList = (props) => {

    const list = props.todoList
    const todo = list.map((todo) => {
            return (<h3>{todo}</h3>)
    })

    return <div className="todo-list">
            {todo}
        </div>
}

const Todo = (props) => {

    const [todoList, setTodoList] = useState([])

    function addTodo(todo) {
        let todoListCopy = [...todoList]
        todoListCopy.push(todo)
        setTodoList(todoListCopy)
    }

    return (<div className="todo">
                <TodoForm addTodo={ addTodo }/>
                <TodoList todoList={ todoList }/>
            </div>)
}

export default Todo