import React, { useContext } from "react";
import Context from "../context";

export default function TodoItem(props) {
  const { removeTodo, onChange } = useContext(Context);

  return (
    <li>
      <span>
        <input
          type="checkbox"
          id={props.id}
          name="input"
          onChange={() => onChange(props.id)}
        />
        <label htmlFor={props.id}>{props.title}</label>
        <button className="btn-del" onClick={removeTodo.bind(null, props.id)}>
          &times;
        </button>
      </span>
    </li>
  );
}
