import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';
import './styles.css';

export const todoList = new TodoList(); 

todoList.todo.forEach(todo => crearTodoHTML( todo ));
