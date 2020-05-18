import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import updateTasks from "./updateTasks";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";
const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  updateTasks,
  filterTable,
  search,
  sort,
});
export default myReducer;
