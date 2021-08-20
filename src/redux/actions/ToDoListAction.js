import { add_task } from "../types/ToDoListTypes";
import {change_theme} from "../types/ToDoListTypes"
import {done_task} from "../types/ToDoListTypes"
import {delete_task} from "../types/ToDoListTypes"
import {edit_task} from "../types/ToDoListTypes"
import {upload_task} from "../types/ToDoListTypes"


export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask
});
export const addChangeThemeAction = (themeId) => ({
  type: change_theme,
  themeId
})
export const deleteTaskAction = (taskId) => ({
  type: delete_task,
  taskId
})
export const doneTaskAction = (taskId) => ({
  type: done_task,
  taskId
})
export const editTaskAction = (task) => ({
  type: edit_task ,
  task
})
export const uploadTaskAction = (taskName) => ({
  type: upload_task ,
  taskName
})
