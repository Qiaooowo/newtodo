import React, { useContext } from 'react'
import { MyContext } from './MyProvider';

const Filter = () => {
    const {filterList,fdo,fdid} = useContext(MyContext) ;

    const fdidHandler = () =>{
        fdid();
    }
    const fdoHandler = () =>{
        fdo();
    }
    return(
       <div>
            <button onClick={fdoHandler}>已完成</button><button onClick={fdidHandler}>未完成</button>
        
        <ul>
            {filterList.map((item) =>(
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
       </div>
    )
}

export default Filter;