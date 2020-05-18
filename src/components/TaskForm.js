import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  //khi click button edit task
  componentWillMount() {
    if (this.props.updateTasks && this.props.updateTasks.id!==null) {
      this.setState({
        id: this.props.updateTasks.id,
        name: this.props.updateTasks.name,
        status: this.props.updateTasks.status,
      });
    }
    else{
      this.onClear();
    }
  }
  //khi form mở lên rồi mà vẫn nhận được props(click button add->click button edit)
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.updateTasks) {
      this.setState({
        id: nextProps.updateTasks.id,
        name: nextProps.updateTasks.name,
        status: nextProps.updateTasks.status,
      });
    } else{
      this.onClear();
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "false" ? false : true;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    //cancel && close
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    if(!this.props.isDisplayForm) return null;
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhật Công Việc" : "Thêm Công Việc"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Lưu lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    updateTasks:state.updateTasks
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
