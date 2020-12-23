import React from "react"

import "./style.css"

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state ={
            toptext :"",
            bottomtext :"",
            image : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        console.log("in mount")
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event){
        console.log("text changed")
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();

        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemImg = this.state.allMemeImgs[randNum].url
        this.setState({
            image : randomMemImg
        })
    }
    render(){
        return(
       <div>
           <form className="meme-from" onSubmit={this.handleSubmit}>
               <input type="text" name="toptext" value ={this.state.toptext} onChange ={this.handleChange} />
               <br />
               <input type="text" name="bottomtext" value ={this.state.bottomtext} onChange ={this.handleChange} />
               <br />
               <button>Gen</button>
               <br />
           </form>
           <div className="meme">
                <img src ={this.state.image} alt="" />
                <h2  className="top">{this.state.toptext}</h2>
                <h2  className="bottom">{this.state.bottomtext}</h2>
           </div>
       </div>

        )
    }
}

export default MemeGenerator