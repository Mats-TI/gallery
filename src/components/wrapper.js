/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css'

class Wrapper extends React.Component{
constructor(props){
    super(props);

    this.state={
        users:[],
        isLoading:true,
        error:null,
        keyWord:'',
        fullKeyWord:''
    }
    
}
updateLink(){
    try{
    var url=`https://pixabay.com/api/?key=18573804-7ea25786f4b555ca00fe625c2&q=${this.state.keyWord}&image_type=photo`;
     fetch(url).then((res)=>{
        return(res.json());
    }).then((data)=>
    this.setState({
        users:data.hits,
        isLoading:false
    })).catch((err)=>{
        this.setState({
            error:err
        })
    });}
    catch(error){
        this.setState({
            error:error
        })
    }
    
}   
    handleTermChange=(event)=>{
    this.setState({
        keyWord:event.target.value
    })
}
changeFullKey=()=>{
    this.setState({
        fullKeyWord:this.state.keyWord
    })
}
submitHandler=(event)=>{
    event.preventDefault();
    this.updateLink()
    this.changeFullKey()
}

    async componentDidMount(){
        var url='https://pixabay.com/api/?key=18573804-7ea25786f4b555ca00fe625c2&q='+this.state.keyWord+'&image_type=photo';
        console.log(url);
        await fetch(url).then((res)=>{
            return(res.json());
        }).then((data)=>
        this.setState({
            users:data.hits,
            isLoading:false
        })).catch((err)=>{
            this.setState({
                error:err
            })
        });
        
    }

    render(){
        if (this.state.error){
            return(
            <h1>We are working on finding a problem</h1>
            )
        }
        return(
            <div id="wrapper">
                <div id="Front">
                <h1>Welcome to the Prime Gallery Builder</h1>
            <h2>Search for your favourite item to view a gallery of it's best 10 images.</h2>
            <form onSubmit={this.submitHandler}>
                  <input className="mainInput" type="text" value={this.state.keyWord} onChange={this.handleTermChange} placeholder="Your Favourite Item"></input>
                <button className="mainButton" type="submit">Search</button>
                
            </form>
            <br></br>
            <br />
            <br /></div>
        <h1>Images of your favourite item: {this.state.fullKeyWord}</h1>
            <div id="mainGrid">
                <div className="gallery-img img1">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[1].largeImageURL} width="100%" height="100%"></img>)}
                    
                </div>
                <div className="gallery-img img2">
                {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[2].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img3 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[3].largeImageURL} width="100%" height="100%"></img>)}
                    
                    </div>
                    <div className="img4 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    // eslint-disable-next-line jsx-a11y/alt-text
                    (<img src={this.state.users[4].largeImageURL} width="100%" height="100%"></img>)}
                    
                    </div>
                    <div className="img5 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[5].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img6 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[6].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img7 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[7].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img8 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[8].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img9 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[9].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                    <div className="img10 gallery-img">
                    {this.state.isLoading ? 
                    
                    (<h1>LOADING...</h1>):
                    
                    (<img src={this.state.users[10].largeImageURL} width="100%" height="100%"></img>)}
                    </div>
                   
            </div>
            <footer>
                This site utilizes the <a href="https://pixabay.com/api/docs/">Pixabay API</a> to retrieve images. Find out more about Pixabay <a href="https://pixabay.com">here</a> 
            </footer>
            </div>
        )

    }
}
export default Wrapper