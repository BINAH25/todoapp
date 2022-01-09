import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

class App extends React.Component {
    state = {
        items: [],
        id: 0,
        item: '',
        editItem: false
    }
    handleChange = e =>{
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            item: this.state.item
        }

        const updatedItems = [...this.state.items, newItem] 
        this.setState({
            items: updatedItems,
            id: this.state.id+1,
            item: '',
            editItem: false
        })
    }
    clearList = () =>{
        this.setState({
            items: []
        })
    }
    
    handleDelete = id =>{
        const sortedItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: sortedItems
        })
    }

    handleEdit = id =>{
        const editItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: editItems,
            item: selectedItem.item,
            editItem: true
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">
                            todo input
                        </h3>
                        <TodoInput item={this.state.item}
                                    change={this.handleChange}
                                    submit={this.handleSubmit}
                                    editItem={this.state.editItem}
                        />
                        <TodoList items={this.state.items}
                                  clear={this.clearList}
                                  delet={this.handleDelete}
                                  edit={this.handleEdit}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;