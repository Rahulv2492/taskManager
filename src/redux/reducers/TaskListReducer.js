import * as action_type from './../actions/TaskList/ActionType';

const initialState = {
    isAddTaskVisible: false,
    taskList: []
}
const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.TOGGLE_ADD_TASK_MODAL:
            return Object.assign({}, state, {
                isAddTaskVisible: !state.isAddTaskVisible
            });
        case action_type.ADD_NEW_TASK:
            console.log("ADD_NEW_TASK",action.data)
            return Object.assign({}, state, {
                taskList: [...state.taskList,action.data]
            });
        default:
            return state;
    }
}

export default TaskListReducer;