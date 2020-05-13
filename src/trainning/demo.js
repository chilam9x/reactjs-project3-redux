import { createStore } from "redux";

var initialState = {
  status: false,
  sort: {
    by: "name",
    value: 1, //1: tang, -1: giam
  },
};

var myReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    state.status = !state.status;
    return state;
  }
  if (action.type === "SORT") {
    var { by, value } = action.sort;
    var { status } = state;
    return {
      status: status,
      sort: {
        by: by,
        value: value,
      },
    };
  }
  return state;
};
const store = createStore(myReducer);
console.log('default',store.getState());

//thực hiện công việc thay đổi status
var action = { type: "TOGGLE_STATUS" };
store.dispatch(action);
console.log("toogle", store.getState());
//thực hiện công việc sắp xếp name Z-A
var sort_action = {
  type: "SORT",
  sort: {
    by: "name",
    value: -1,
  },
};
store.dispatch(sort_action);
console.log("sort", store.getState());
