import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme";
import { add_task } from "../types/ToDoListTypes";
import { delete_task } from "../types/ToDoListTypes";
import { done_task } from "../types/ToDoListTypes";
import { edit_task ,upload_task} from "../types/ToDoListTypes";
import { change_theme } from "../types/ToDoListTypes";
import { arrTheme } from "../../JSS_StyledComponent/Themes/ThemeManager";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "-1", taskName: "", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      // console.log('todo',action.newTask)
      //kiem tra rong~
      if (action.newTask.taskName.trim() == "") {
        alert("Nhap vo cho tao");
        return { ...state };
      }
      //kiem tra ton tai
      let taskListUpdate = [...state.taskList]; //sao chep taskList
      let index = taskListUpdate.findIndex(
        (task) => task.taskName == action.newTask.taskName
      );
      //neu trung nhau
      if (index !== -1) {
        alert("task name da ton tai");
        return { ...state };
      }
      //push phan tu moi vao mang taskListUpdate sau khi onClick add task
      taskListUpdate.push(action.newTask);
      //sau khi xu ly o tren xog, thi gan taskListUpdate moi cho state.taskList cu~
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case change_theme: {
      let themeNew = arrTheme.find((themeNew) => themeNew.id == action.themeId);
      console.log(arrTheme);
      console.log(themeNew);
      if (themeNew) {
        state.themeToDoList = { ...themeNew.theme }; //theme nam trong mang arrTheme
      }
      return { ...state };
    }
    case done_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      console.log(index)
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      state.taskList = taskListUpdate;
      return { ...state };
    }

    case delete_task: {
      // console.log('hello')
      // let taskListUpdate = [...state.taskList]
      // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);
      // state.taskList = taskListUpdate
      // return {...state};

      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }
    case edit_task: {
      return { ...state,taskEdit: action.task};
    }
    case upload_task: {
      //chinh sua lai taskName cua taskEdit, gan taskName cho taskEdit
      state.taskEdit = {...state.taskEdit, taskName: action.taskName};
      console.log(state.taskEdit)
      //tim trog taskList update lai taskEdit ng dung update
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(task=>task.id == state.taskEdit.id);
      // console.log(state.taskList.id)
      console.log(index)
      if(index !== -1){
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;
      //gán lại trường taskEdit để componentDidUpdate ko bị trùng với prev cũ trc đó
      state.taskEdit = {id: '-1', taskName:'',done: false};

      return { ...state}
    }
    default:
      return { ...state };
  }
};
