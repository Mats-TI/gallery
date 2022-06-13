import React from 'react'

class ErrorHandler extends React.Component{
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        });
    
    }
    reloadMethod=()=>{
        window.location.reload()
    }
    render(){
        if (this.state.hasError){
        return(
            <div className='errorPage'>
                <h1>That did not go according to plan :(. Confirm the spelling of your query or search for another item</h1>
                <button onClick={this.reloadMethod}>Refresh</button>
            </div>
        )
        }
        return(
            this.props.children
        )
    }
    
}
export default ErrorHandler