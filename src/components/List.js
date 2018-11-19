import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id} {todo.title}{" "}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
