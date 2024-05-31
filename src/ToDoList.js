import { Component } from "react";
import icon from './icon.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        doList: []
    }
    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input) {
        if (input===""){
            alert("Please enter an item!")
        }
        else {
            let listArray= this.state.doList;
            listArray.push(input);
            this.setState({doList:listArray, userInput:''})
        }
    }

    deleteItem() {
        let listArray =this.state.doList;
        listArray= [];
        this.setState({doList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="What do you want to do?"
                        onChange= {(e)=>{this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
                    </div>
                    <ul>
                        {this.state.doList.map((item,index)=>(
                            <li onClick={this.crossedWord} key={index}>
                                <img src={icon} width="15px" alt="icon"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="container">
                        <button onClick={()=>this.deleteItem()} className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}