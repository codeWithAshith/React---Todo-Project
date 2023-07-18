import React from "react";
import TodoItemComponent from "./TodoItem.component";

const TodoListComponent = ({ todos, setTodos, setTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            setTodo={setTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoListComponent;
