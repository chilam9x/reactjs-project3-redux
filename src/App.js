import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */}
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Thêm công việc
                  <span className="fa fa-times-circle text-right"></span>
                </h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên:</label>
                    <input type="text" className="form-control" name="name" />
                  </div>
                  <label>Trạng thái:</label>
                  <select className="form-control" name="stattus">
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-plus mr-5"></span>Lưu lại
                    </button>
                    &nbsp;
                    <button type="submit" className="btn btn-danger">
                      <span className="fa fa-close mr-5"></span>Hủy bỏ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-plus mr-5"></span>Thêm công việc
            </button>
            {/* Search - sort */}
            <div className="row mt-15">
              {/* search */}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" className="form-control" name="keyword" placeholder="Nhập từ khóa..."/>
                  <span className="input-group-btn">
                  <button type="button" className="btn btn-primary"><span className="fa fa-search mr-5"></span> Tìm</button>
                  </span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
