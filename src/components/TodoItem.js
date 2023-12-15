import React from "react";
class TodoItem extends React.Component {
render() {
    
    return <li className="todo-item">
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>DELETE</button>
        &nbsp;
        <span>{this.props.todo.title}</span>
    </li>
}
}
export default TodoItem

 
