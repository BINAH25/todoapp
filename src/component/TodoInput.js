import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, change, submit, editItem} = this.props
        return (
            <div className='card card-body mt-3'>
               <form onSubmit={submit}>
                   <div className='input-group'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book'/>

                            </div>
                     
                        <input type='text' 
                                className='form-control text-capitalize' 
                                placeholder='Enter todo item'
                                value={item}
                                onChange={change}></input>
                                
                   </div>
                   <div className='list-group'>
                        <button type='submit' className={editItem ? 'btn btn-success mt-3':'btn btn-primary mt-3'}>
                            {editItem ? 'Edit Item': 'Add Item'}
                        </button>
                   </div>
               </form>
            </div>
        )
    }
}
