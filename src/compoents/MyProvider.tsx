import React,{createContext, useState} from "react";
 
export interface StateProps{
    id : number;
    text : string;
    isFinished : boolean;
}
export interface ContextProps {
    todoList:StateProps[];
    filterList:StateProps[];
    changeTodo: (id : number) => void;
    addTodo: (todo : StateProps) => void;
    editTodo: (todoid:number,todo : StateProps) => void;
    deleteTodo: (id : number) => void;
    fdo: () => void;
    fdid: () => void;
}
// 范型约束
// const MyContext = createContext<ContextProps | null>(null);

//断言
export const MyContext = createContext({}  as ContextProps)

const MyProvider = (props : React.PropsWithChildren<{}>) =>{
//hook
const [todoList, setTodolist] = useState<StateProps[]>([])
const [filterList,setfilterList] = useState<StateProps[]>([])
console.log('重新渲染');
//状态提升至父组件 组件控制自身state 使用hook声明state 与setState方法 相当于所有的setState方法在父组件
//修改状态
const changeTodo = (id :number) => {
    const newTodoList = todoList.map(item =>{
        if(item.id === id){
            return Object.assign({}, item,{
                isFinished: !item.isFinished
                })
        }
        return item;
    })
    setTodolist(newTodoList);
}

//删除
const deleteTodo = (id :number) => {
    const  newTodoList= todoList.filter(item =>{
        return item.id !== id;
    })
    setTodolist(newTodoList);
}
//添加
const addTodo = (todo : StateProps) =>{
    setTodolist([...todoList,todo]);
}
//编辑
const editTodo = (todoid:number,todo : StateProps) =>{
    const  newTodoList= todoList.map(item =>{
        if(item.id === todoid){
            return todo;
        }
        return item;
    })
    setTodolist(newTodoList);
}


//筛选filter
    const fdo = () =>{
        const  newTodoList= todoList.filter(item =>{
            return item.isFinished === true;
        })
        setfilterList(newTodoList);
    }
    const fdid = () =>{
        const  newTodoList= todoList.filter(item =>{
            return item.isFinished === false;
        })
        setfilterList(newTodoList);
    
    }

    return (
        <MyContext.Provider value={
            {
                todoList,
                filterList,
                changeTodo,
                addTodo,
                deleteTodo,
                editTodo,
                fdo,
                fdid

            }
        }>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyProvider;