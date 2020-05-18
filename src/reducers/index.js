import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import updateTasks from "./updateTasks";
import filterTable from "./filterTable";
const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  updateTasks,
  filterTable
});
export default myReducer;
