import React from "react";


class SearchUserForm extends React.Component {
    constructor() {
      super();
      this.state = {
          user: [],
        
      };
    }
  
    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    submitTask = e => {
      e.preventDefault();
      this.props.addTask(this.state.task);
    };
  
    render() {
      return (
        <form onSubmit={this.submitTask}>
          <input
            type="text"
            value={this.task}
            name="task"
            onChange={this.handleChanges}
          />
          <button>New Task!</button>
        </form>
      );
    }
  }
export default SearchUserForm;