import React, {useRef} from 'react'

export const TodoForm = ({ addTodo }) => {
    const input = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(input.current.value)
        input.current.value = ''
    }

    return (
        <div>
            <form className="form"> 
                <input
                    className="input-field"
                    type="text"
                    ref={input}
                    maxLength="38"
                />
                <button
                    className="submit-button"
                    type="submit"
                    onClick={submitHandler}
                >add</button>
            </form>
        </div>
    )
}