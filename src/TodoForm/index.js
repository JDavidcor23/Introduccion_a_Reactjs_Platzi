import React from 'react';
import {TodoContext} from '../TodoContext/index'
import './TodoForm.css';



function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const{
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () =>{
        setOpenModal(false)
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        setOpenModal(false)
        addTodo(newTodoValue)
    }
    return(
        <form onSubmit={onSubmit} className="form">
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value = {newTodoValue}
            onChange = {onChange}
            placeholder="Escribe tu TODO"
            />
            <div>
                <button
                type="submit"
                >Guardar</button>
                <button
                onClick={onCancel}
                >Cancelar</button>
            </div>
        </form>
    )
}

export {TodoForm}