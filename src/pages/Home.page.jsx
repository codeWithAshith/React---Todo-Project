import React, { useState } from "react";

import InputComponent from "../components/Input.component";
import ButtonUtils from "../utils/Button.utils";
import TodoListComponent from "../components/TodoList.component";

const INITIAL_STATE = { id: 0, item: "" };

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(INITIAL_STATE);

  return (
    <div className="flex flex-col w-screen h-screen my-16 items-center">
      <div className="flex flex-row my-6">
        <div>
          <InputComponent state={todo} setState={setTodo} />
        </div>
        <div className="mx-2">
          <ButtonUtils
            label={"Add"}
            clickHandler={() => {
              console.log("Hojme", todo);
              if (todo.id === 0) {
                setTodos([...todos, { ...todo, id: Date.now() }]);
              } else {
                setTodos(
                  todos.map((t) => {
                    if (t.id === todo.id) {
                      return todo;
                    } else return t;
                  })
                );
              }
              setTodo(INITIAL_STATE);
            }}
          />
        </div>
      </div>
      <p className="text-xl mb-4">Todo Items</p>
      <TodoListComponent
        todos={todos}
        setTodos={setTodos}
        state={todo}
        setTodo={setTodo}
      />
    </div>
  );
};

export default HomePage;
