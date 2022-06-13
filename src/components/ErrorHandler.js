import React from 'react'

class ErrorHandler extends React.Component{
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    refreshPage=()=>{
        window.location.reload()
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        });
    
    }
    render(){
        if (this.state.hasError){
        console.log(this.state.hasError)
        return(
            <div className='errorPage'>
                <h1>Something ran amok</h1>
                <button onClick={this.refreshPage}>Refresh Page</button>
            </div>
        )
        }
        return(
            this.props.children
        )
    }
    
}
export default ErrorHandler