import * as React from 'react';
import { TodoContextType, ITodo } from '../../store/todo-context';
// import { TodoContext } from '../context/todoContext';
import { TodoContext } from '../../store/todo-context';
import Todo from './todo';



const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;