import {ADD_ITEM, REMOVE_ITEM, CHANGE_INPUT, GET_LIST } from './actionType';
import axios from 'axios';


export const getTodoList = () => {
    return (dispatch)=> {
        axios.get('https://easy-mock.com/mock/5f33c8c6a67fac708f9626df/todolist').then((res) => {
            const list = res.data.list;
            dispatch(getListAction(list))
        })
    }
}

export const getListAction = (value) => {
    return {
        type: GET_LIST,
        value
    }
}
export const addItemAction = ()=> {
    return {
        type: ADD_ITEM,
    }
}

export const removeItemAction = (value) => {
    return {
        type: REMOVE_ITEM,
        value,
    }
}

export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}