import React from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

class TaskControl extends React.Component {
  render() {
    return (
      <div className="row mt-15">
        <TaskSearch onSearch={this.props.onSearch}/>
        <TaskSort onSort={this.props.onSort}/>
      </div>
    );
  }
}

export default TaskControl;
