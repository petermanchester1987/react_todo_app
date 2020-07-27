import React from "react";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import Header from "./components/layout/Header.js";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the Trash",
        completed: false,
      },
      {
        id: 2,
        title: "Make Dinner",
        completed: true,
      },
      {
        id: 3,
        title: "Hoover up house",
        completed: false,
      },
    ],
  };

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
