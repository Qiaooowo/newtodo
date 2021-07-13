import React, { useContext } from 'react'

import {useState} from 'react'
import { StateProps } from './MyProvider'
import { MyContext } from './MyProvider'

const styles = {
    marginTop: "5px",
    padding: '5px 0',
    boxShadow: '0 0 3px #eee',
    
}
const deletestyle = {
    width: '12px',
    height: '12px',
    background: 'red',
    borderRadius: '6px',
    display: 'inline-block',
    cursor: 'pointer',
}

interface Iprops {
    todo: StateProps;

}
//函数式组件
const TodoItem = ({ todo }: Iprops) => {

    const {changeTodo,deleteTodo,editTodo} = useContext(MyContext) ;
    let[show,setShow] = useState(false);

    const labelStyle = {
        textDecoration: todo.isFinished ? 'line-through' : 'none',
        height: "30px",
        width: "80px"
    }
    //使用如下箭头函数相当于bind(this)
    const changeHandler = () => {
        //两层传入的changetodo 即状态提升 受控组件
        changeTodo(todo.id);
    }
    const deleteHandler = () => {
        deleteTodo(todo.id);
    }
    const showHandler = () => {
        setShow(!show);
    }

    //编辑框输入
    const [ text , setText ] = useState('');
    //指定e的类型
    const changeTextHandler = (e : React.ChangeEvent) => {
       
        setText((e.target as HTMLInputElement).value);
        
    }
   //编辑
    const editTodoHandler = () => {
        //判断输入
        if(text.trim() === ''){
            return;
        }
        //传入一个tdoo.id和新todo对象 
        editTodo(todo.id,{
            id: new Date().getTime(),
            text:  text,
            isFinished: false
        })
        //清空输入框
        setText('');
    }

    return (
        <div> 
            <li id="todoitem" style={styles} >
            {/**绑定onChange 非onClick */}
            <input type="checkbox" id={todo.id.toString()} checked={todo.isFinished} onChange={changeHandler}/>
            <label htmlFor={todo.id.toString()} style={labelStyle}>{todo.text}</label><button style={deletestyle} onClick={deleteHandler}> </button><button onClick={showHandler} >编辑</button>
            {show ? <div><input type="text" placeholder = '编辑内容' onChange={changeTextHandler} value = {text}/> <button onClick ={editTodoHandler}>确认</button > </div>
            : 
            null} </li>
            
        </div>
    )
}
export default TodoItem;