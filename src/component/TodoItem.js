import React, { Children, Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, delet, edit} = this.props;
        return (
            <div>
                <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                    <h3>
                        {title}
                    </h3>
                    <div>
                        <span className='mx-2 text-success' onClick={edit}>
                            <i className='fas fa-pen'></i>
                        </span>
                        <span className='mx-2 text-danger' onClick={delet}>
                            <i className='fas fa-trash'></i>
                        </span>
                    </div>

                </li>
            </div>
        )
    }
}
