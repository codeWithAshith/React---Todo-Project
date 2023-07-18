import React from "react";

import { LuEdit2 } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import IconUtils from "../utils/Icon.utils";

const TodoItemComponent = ({ todo, setTodo, setTodos, todos }) => {
  return (
    <div className="flex justify-between items-center w-96 border rounded p-5 my-2">
      <p>{todo.item}</p>
      <div className="flex ">
        <div className="text-cyan-500 mx-2">
          <IconUtils
            icon={<LuEdit2 />}
            clickHandler={() => {
              setTodo(todo);
            }}
          />
        </div>
        <div className="text-red-500">
          <IconUtils
            icon={<MdDeleteOutline />}
            clickHandler={() => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItemComponent;
