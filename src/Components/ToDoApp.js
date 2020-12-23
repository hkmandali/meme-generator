import React from "react"

import ReactDOM from "react-dom"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

// function ToDoApp(){
//     const todoComponents = todosData.map((item) => <ToDoItem key={item.id} item={item}/>)
//     return(
//         <div className="todo-list">
//             {todoComponents}
//         </div>
//     );

// }

class ToDoApp extends React.Component{
    constructor(){
        super()
        this.state ={
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id)
    {
        console.log("cliekd the checkbox "+id)
        this.setState(prevState =>{
            const upDatedTodos = prevState.todos.map(todo =>{
                if(todo.id === id)
                {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos : upDatedTodos
            }
        })
    }
    render(){
        const todoComponents = this.state.todos.map((item) => <ToDoItem key={item.id} item={item} 
        handleChange = {this.handleChange}/>)
        return(
            <div className="todo-list">
                {todoComponents}
            </div>

        )

    }
}

export default ToDoApp