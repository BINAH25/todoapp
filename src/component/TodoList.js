import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, clear, delet, edit} = this.props
        return (
            <div>
               <ul className='list-group my-5'>
                   <h3 className='text-center text-capitalize'>
                       todo list
                   </h3>
                   {items.map(item =>{
                       return <TodoItem delet={() => delet(item.id)}
                                        edit={() => edit(item.id)}
                                        key={items.id}
                                        title={item.item}
                                        />
                   })}
                   
                   <button type='button' 
                            className='btn btn-danger mt-5'
                            onClick={clear}>
                       Clear List
                   </button>
               </ul>
            </div>
        )
    }
}
