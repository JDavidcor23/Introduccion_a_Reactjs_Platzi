import React from 'react';
import {TodoContext} from '../TodoContext/index'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal/index'
import { TodoForm } from '../TodoForm';
function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal
    }= React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
            {error && <p>Espera, hubo un error</p>}
            {loading && <p>Estamos cargando</p>}
            {/* si estas dos condiciones no se cumplen () */}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

            {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
            ))}
            </TodoList>
            {openModal &&(
            <Modal
            setOpenModal = {setOpenModal}
            >
              <TodoForm></TodoForm>
              {/* <p>{searchedTodos[0]?.text}</p> */}
            </Modal>
            )}
      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
