import React ,{ useContext }from 'react'
import TodoItem from './TodoItem';
import {MyContext} from './MyProvider';

const styles ={
    marginTop:"15px"
}
//池子 可以放props传下来的

//函数式组件
const TodoList = () => {
    const {todoList} = useContext(MyContext) ;
    const todoListdom = todoList.map((item) => <TodoItem key = {item.id} todo={item} />)
    return(
        <ul id="todolist" style={styles}> 
            {todoListdom}
        </ul>
    )
}
export default TodoList;