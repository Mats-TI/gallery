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
    render(){
        if (this.state.hasError){
        return(
            <div>
                <h1>Something ran amok</h1>
            </div>
        )
        }
        return(
            this.props.children
        )
    }
    
}
export default ErrorHandler