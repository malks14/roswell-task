import React, {useReducer} from "react";
import TaskContext from "./task-context";

const defaultTaskState = {
    task: [],
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                task: [...state.task, action.item]
            }
        default:
            return state;
    }
}

const TaskProvider = props => {
    const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultTaskState);

    const addTaskHandler = (item) => {
        dispatchTaskAction({type: "ADD", item: item});
    };

    const taskContext = {
        task: taskState.task,
        addTask: addTaskHandler
    }

    return (
        <TaskContext.Provider value={taskContext}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;