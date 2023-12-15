import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
        title: ""
    });
  };

  render() {
    return (
      <form className="f-container" onSubmit={this.handleSubmit}>
        <label for="task">New Course(s):</label>
        &nbsp;
        <select id="task" value={this.state.title} className="f-input" onChange={this.onChange}>
          <option value="" disabled>Add Course...</option>
          <option value="CNIT 132 - Intermediate HTML & CSS - 3 units">CNIT 132 - Intermediate HTML & CSS - 3 units</option>
          <option value="CNIT 133 - JavaScript, jQuery, AXAX - 3 units">CNIT 133 - JavaScript, jQuery, AXAX - 3 units</option>
          <option value="CNIT 132A - Advanced HTML & CSS - 3 units">CNIT 132A - Advanced HTML & CSS - 3 units</option>
          <option value="CNIT 133A - JavaScript Libraries/Frameworks - 3 units">CNIT 133A - JavaScript Libraries/Frameworks - 3 units</option>
          <option value="CNIT 133M - Mobile Web Dev with HTML, CSS, JS - 3 units">CNIT 133M - Mobile Web Dev with HTML, CSS, JS - 3 units</option>
          <option value="CNIT 131A - XML & JSON - 3 units">CNIT 131A - XML & JSON - 3 units</option>
        </select>

        <input type="submit" value="SUBMIT" className="f-submit" />
      </form>
    )
  }
}
export default InputTodo

