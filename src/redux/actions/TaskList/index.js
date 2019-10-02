import * as action from './ActionType';

export const toggleModal = () => {
    return {
        type: action.TOGGLE_ADD_TASK_MODAL
        }
}
export const addNewTask = (data) => {
    return {
        type: action.ADD_NEW_TASK,
        data
        }
}
