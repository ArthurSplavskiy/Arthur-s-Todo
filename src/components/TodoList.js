import React from 'react'

export const TodoList = ({ todos, removeTodo, doneTodo }) => {

    return(
        <ul className="todo-list">
            {todos.map((todo, index) => {
                const classes = []
                if(todo.completed) {
                    classes.push('todo-done')
                }
                return (
                    <li key={todo.id} className="todo-item">
                        <div className="content">
                            <strong>{index+1}</strong>
                            <input type="checkbox" onChange={() => doneTodo(todo.id)} checked={todo.completed}/>
                            <span className={classes.join(' ')}>{todo.title}</span>
                        </div>
                        <div className="control">
                            <small className="date">{new Date().toLocaleDateString()}</small>
                            <button className="delete-btn" onClick={removeTodo.bind(null, todo.id)}>Remove</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}