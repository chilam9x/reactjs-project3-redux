import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import updateTasks from "./updateTasks";
const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  updateTasks,
});
export default myReducer;
