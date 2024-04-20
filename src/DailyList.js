import { Component } from "react";
import dot from './icons8-dot-30.png';


export class DailyList extends Component {
    state = {
    userInput: "",
    dailyList: [],
    }

onChangeEvent(e){
this.setState({ userInput: e})
}

addItem(input){
    if(input === ''){
        alert ("Pleas enter an item")
    } else {
    let ListArray = this.state.dailyList;
    ListArray.push(input);
    this.setState({dailyList: ListArray,userInput: ''})
}}

deleteItem(input){
    
    let ListArray = this.state.dailyList;
    ListArray = []
    this.setState({dailyList: ListArray})
}


crossedWord(event){
    const li = event.target;
    li.classList.toggle ('crossed');
}

onFormSubmit(e){
    e.preventDefault();
}

    render(){
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
     <div className="container">
    <input 
    type="text"
    placeholder="What do you want to do today?"
    onChange={ (e) => {this.onChangeEvent(e.target.value)}}
    value={ this.state.userInput}/>
</div> 
    <div className="container">
     <button onClick={ () => this.addItem(this.state.userInput)} className="add"> Add</button>
   </div>

   <ul>
    {this.state.dailyList.map((item, index) => (
        <li onClick = {this.crossedWord} key = {index}> 
        <img src={dot}  width="15px" alt="dot"/>{item} </li>
    ))}
    </ul>
    <div className="container">
   <button onClick={() => this.deleteItem()} className="delete"> Delete</button>
</div>
</form>
</div>
        )
    }
}