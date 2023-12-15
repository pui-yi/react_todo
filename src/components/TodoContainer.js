import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

class TodoContainer extends React.Component {

  
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  
  render() {
    return (
      <div className="container">   
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
      </div>
    )
  }
  state = {
    todos: [
    {
        id: uuidv4(),
        title: "CNIT 103 - Hardware – 3 units",
        completed: false
    },
    {
        id: uuidv4(),
        title: "CNIT 131 - Internet & Intro to HTML, CSS – 3 units",
        completed: false
    },
    {
        id: uuidv4(),
        title: "CNIT 106 - Introduction to Networks – 3 units",
        completed: false
    },
    {
        id: uuidv4(),
        title:"CNIT 120 - Network Security – 3 units",
        completed: false
    }
    ]
  };
}
export default TodoContainer