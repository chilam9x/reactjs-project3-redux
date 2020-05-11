import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      status: true,
    };
  }
  //khi click button edit task
  componentWillMount (){
   if(this.props.task)
   {this.setState({
     id:this.props.task.id,
     name:this.props.task.name,
     status:this.props.task.status,
   })}
  } 
  //khi form mở lên rồi mà vẫn nhận được props(click button add->click button edit)
  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.task)
    {
      this.setState({
      id:nextProps.task.id,
      name:nextProps.task.name,
      status:nextProps.task.status,
      })
    }
    else if(!nextProps.task){
      this.setState({
        id:'',
        name: '',
        status: true,
      })
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
    this.props.onSubmit(this.state);
    //cancel && close
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState ({
      name: "",
      status: true,
    });
  };
  render() {
    var {id}=this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id!==''?'Cập nhật Công Việc':'Thêm Công Việc'}
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

export default TaskForm;
