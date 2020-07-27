import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/pages/About.js";
import Header from "./components/layout/Header.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the Trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Make Dinner",
        completed: true,
      },
      {
        id: uuidv4(),
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

  //add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
