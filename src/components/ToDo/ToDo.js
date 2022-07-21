import React, { useEffect, useState } from 'react'

export const ToDo = () => {

    const [todos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')


    useEffect( async () => {

        const fetchToDo = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await response.json()
            setToDos(json)
        }
        fetchToDo()

    }, [])

    const handleToDo = (e) => {
        setInputValue(e.target.value)
    }

    const submitToDo = (e) => {
        e.preventDefault();
        if(inputValue.split('').length < 10) alert('слишком коротко')
        else (setToDos([...todos, {title: inputValue, id: todos.length + 2,} ]))
        console.log(e.target)
        
    }

    const deleteToDo = (id) => {
        setToDos(todos.filter((t) => {
            return t.id !== id
        }))
    }



  return (
    <div>

        <form>
            <input type='text' onChange={handleToDo}></input>
            <button onClick={submitToDo}>Add new todo</button>
        </form>
        {
        todos.map((todo, pos) => {
            return (
                <div key={todo.id}>{pos +1}. {todo.title} <button onClick={() => deleteToDo(todo.id)}>-</button> </div>
            )
        })
        }
    </div>
  )
}
