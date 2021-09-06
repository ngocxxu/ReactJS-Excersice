import React, { Component } from "react";
import { Container } from "../../ComponentsToDoList/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { TextField } from "../../ComponentsToDoList/TextField";
import { Button } from "../../ComponentsToDoList/Button";
import { Link } from "../../ComponentsToDoList/Link";
import {
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
} from "../../ComponentsToDoList/Table";
import { connect } from "react-redux";
import { addTaskAction } from "../../../redux/actions/ToDoListAction";
import { deleteTaskAction } from "../../../redux/actions/ToDoListAction";
import {
  doneTaskAction,
  editTaskAction,
  uploadTaskAction,
} from "../../../redux/actions/ToDoListAction";
import { addChangeThemeAction } from "../../../redux/actions/ToDoListAction";
import { arrTheme } from "../../../JSS_StyledComponent/Themes/ThemeManager";

class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th valign="middle">{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState({
                    disabled: false,
                  },()=>{
                    this.props.dispatch(editTaskAction(task));
                  })
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskDone = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr>
            <Th valign="middle">{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };

  //life cycle version <16.4 nhan vao props moi dc thuc thi trc render
  // componentWillReceiveProps(nextProps){
  //   console.log(this.props);
  //   console.log(nextProps)
  //   this.setState({
  //     taskName: nextProps.taskEdit.taskName
  //   })
  // }

  //lifecycle nay ko dung dc con tro this
  // getDerivedStateFromProps(newProps, currentState) {

  //   //hoac tra ve state moi (this.state)
  //   let newState = {...currentState,taskName: newProps.taskEdit.taskName}
  //   return newState;
  //   //tra ve null va state giu nguyen
  //   // return null;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50 mt-5">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              //dispatch value leen reducer
              this.props.dispatch(addChangeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading2 className="display-4 text-center">To do list</Heading2>
          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              return this.setState(
                {
                  taskName: e.target.value,
                },
                () => {
                  // console.log(this.state)
                }
              );
            }}
            name="taskName"
            label="Task name"
            className="w-50"
          ></TextField>
          <Button
            onClick={() => {
              //lay thong tin ng dung nhap vao tu input
              let { taskName } = this.state;

              //tao ra 1 task object
              let newTask = {
                id: Date.now(),
                taskName: taskName, //nhan gia tri value cua ham onchange tu ng dung nhap vao
                done: false,
              };

              //dua task obj len redux thong qa dispatch
              this.props.dispatch(addTaskAction(newTask));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i>
            Add task
          </Button>
          {this.state.disabled ? (
            <Button disabled
              onClick={() => {

                this.props.dispatch(uploadTaskAction(this.state.taskName));
              }}
              className="ml-2"
            >
              <i className="fa fa-uploaded"></i>
              Update task
            </Button>
          ) : (
            <Button 
              onClick={() => {
                let {taskName} = this.state;
                this.setState({
                  disabled: true,
                  taskName:'',
                }, ()=>{
                  this.props.dispatch(uploadTaskAction(taskName));
                })
              }}
              className="ml-2"
            >
              <i className="fa fa-uploaded"></i>
              Update task
            </Button>
          )}
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskDone()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  //lifecycle nay tra ve props cu va state cu va no chay sau render
  componentDidUpdate(prevProps, prevState) {
    //so sánh nếu như props trc do (taskEdit trc mà khác taskEdit hiện tại thì mình mới setState)
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => ({
  themeToDoList: state.ToDoListReducer.themeToDoList,
  taskList: state.ToDoListReducer.taskList,
  taskEdit: state.ToDoListReducer.taskEdit,
});

export default connect(mapStateToProps)(ToDoList);
