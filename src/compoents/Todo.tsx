import React from 'react'

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import Filter from './Filter';

import MyProvider from './MyProvider';


//函数式组件
const Todo = () => {


    

    return(
        <MyProvider>
        <div id="todo">
            <TodoInput/>
            <TodoList />
            <Filter/>
        </div>
        </MyProvider>
    )
}
export default Todo;