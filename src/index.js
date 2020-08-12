import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import store from './store';
import 'antd/dist/antd.css';

const App = ()=> {//提供器
    return <Provider store={store}>
        <TodoList />
    </Provider>
}

ReactDOM.render(<App/>, document.getElementById('root'));

