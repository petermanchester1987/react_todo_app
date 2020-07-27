import React from "react";
import Todos from "./components/Todos.js";
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
        completed: false,
      },
      {
        id: 3,
        title: "Hoover up house",
        completed: false,
      },
    ],
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
