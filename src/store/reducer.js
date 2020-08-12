import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST  } from "./actionType";

const defaultState = {
    inputValue: 'xxx',
    list: [],
};

export default (state = defaultState, action)=> {
    //reducer只能接收state，不能改变state
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.value
            };
        case ADD_ITEM:
            return {
                ...state,
                inputValue: '',
                list: [...state.list, state.inputValue]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                list: state.list.filter((item, index) => action.value !== index)
            };
        case GET_LIST:
            return {
                ...state,
                list: action.value,
            }
        default:
            return state
    }
}