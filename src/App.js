import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      sortBy: "name",
      sortValue: 1,
    };
  }

  //thêm task
  onToggleForm = () => {
    var updateTasks = this.props;
    if (updateTasks && updateTasks.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTasks({
      id: "",
      name: "",
      status: false,
    });
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
 
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onSearch = (keyword) => {
    this.setState({ keyword: keyword });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };
  render() {
    var {
      // keyword,
      sortBy,
      sortValue,
    } = this.state;

    var { isDisplayForm } = this.props;
 
    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });

    // }
    // if (sortBy === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* Form */}
            <TaskForm />
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>

            {/* search-sort */}
            <TaskControl
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            {/* list*/}
            <TaskList/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    updateTasks: state.updateTasks,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTasks: (task) => {
      dispatch(actions.updateTasks(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
