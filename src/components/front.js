/* eslint-disable no-useless-constructor */
import React,{Component} from "react";
import "./style.css";
import Wrapper from "./wrapper";

class Front extends Component{
    constructor(props){
        super(props)
        
        this.state={
            searchTerm:''
        }
    }
    changeInput=(event)=>{
        if (event.key==='Enter'){
        this.setState({
            searchTerm:event.target.value
            
        })}
    }
    
    handleTermChange=(event)=>{
        this.setState({
            searchTerm:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        this.setState({
            searchTerm:event.target.value
        })
        console.log(`value being submitted ${this.state.searchTerm}`)
    }
    
    /*submitHandler=(event)=>{
        event.preventDefault();
        console.log(`this is what the user input: ${this.inputRef.current.value}`);
    }*/
    render(){
        return(
        <div id="frontText">
            <h1>Welcome to the Prime Gallery Builder</h1>
            <h2>Search for your favourite item to view a gallery of it's best 10 images.</h2>
            <form onSubmit={this.submitHandler}>
                  <input className="mainInput" type="text" defaultValue={this.state.searchTerm} onKeyDown={this.changeInput.bind(this)} placeholder="Your Favourite Item"></input>
                <button className="mainButton" type="submit" onClick={this.changeInput.bind(this)}>Search</button>
                
            </form>
            <br></br>
            <br />
            <br />
            <h1>Images of your favourite item:</h1>
        </div>
        )
    }
  
}
export default Front;