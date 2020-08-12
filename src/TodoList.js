import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import * as action from "./store/actionCreator";
import TodoListUI from './TodoListUI';


class TodoList extends React.PureComponent {
    componentDidMount() {
        this.props.getTodoList();
    }
    handleAddItem = () => {
        if (!this.props.inputValue) {
            message.warn('请填写数据', 2);
            return;
        }
        this.props.onAddItem();
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.props.inputValue}
                list={this.props.list}
                onChangeValue={this.props.onChangeValue}
                onAddItem={this.handleAddItem}
                onRemoveItem={this.props.onRemoveItem}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => { //将state映射到 UI 组件的参数（props）
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => { //将用户对 UI 组件的操作映射成 Action
    return {
        getTodoList(){
            dispatch(action.getTodoList()); 
        },
        onChangeValue(e){
            const value = e.target.value;
            dispatch(action.changeInputAction(value))
        },
        onAddItem(){
            dispatch(action.addItemAction());
        },
        onRemoveItem(index){
            dispatch(action.removeItemAction(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
