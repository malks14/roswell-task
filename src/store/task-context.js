import React from 'react'

const TaskContext = React.createContext({
    task: [],
    addTask: (item) => {}
})
export default TaskContext;
