import logo from './logo.svg';
import './App.css';
import React from "react"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function clicked(){
  console.log("I am clicked")
}

function mouseOver(){
  console.log("hovering the mouse")
}

class App extends React.Component
{
  constructor(){
    super()
    this.state ={
      firstName : "",
      lastName :"",
      isFriendly :false,
      age :"",
      gender :"",
      favColor :""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount(){
  //   fetch("https://swapi.co/api/people/1")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({
  //         count : data
  //       })
  //     })
  // }
  handleClick()
  {
    //this.state.count++ // we cannot change the state directly , it gives an error
    this.setState(prevState =>{ // here prevState is the previous state of the page
      return{
        count : prevState.count +1
      }
    }
    )
  }
  // render()
  // {
  //   return (
  //     <div>
  //       <h1>{this.state.count}</h1>
  //       <button >CLick me to change the count</button>
  //     </div>
  //   )
  // }
  handleChange(event){
    event.target.type === "checkbox" ? 
      this.setState({[event.target.name] : event.target.checked})
    : this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event)
  {
    event.preventDefault();
    console.log("submitted the form")
    var age = this.state.age
    if(!Number(age))
    {
      alert("age must be a number")
    }
  }



  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value = {this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
          <br />
          <input type="text" value = {this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
          <br />
          <input type="text" value = {this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />
          {/* <h1>{this.state.firstName} {this.state.lastName}</h1> */}
          <br />
          <textarea placeholder="some default text" />
          <br />
          <input type="checkbox" 
            name ="isFriendly"
            onChange ={this.handleChange}
          />Is isFriendly?
          <br />
          <label>
            <input
              type ="radio"
              name = "gender"
              value = "male"
              checked = {this.state.gender === "male"}
              onChange ={this.handleChange}
             /> Male
            
          </label>
          <br />
          <label>
          <input
              type ="radio"
              name = "gender"
              value = "female"
              checked = {this.state.gender === "female"}
              onChange ={this.handleChange}
             /> Female
          </label>
          <br />
          <label>Favourite Color</label>
          <select value={this.state.favColor} onChange ={this.handleChange}
          name ="favColor">
            <option value ="blue">Blue</option>
            <option value ="green">Green</option>
            <option value ="red">Red</option>
          </select>
          <h2> your fav color is {this.state.favColor}</h2>

          <button>Submit</button>
        </form>
        <hr />
        <h3>Entered Information</h3>
        <p>YOur name : {this.state.firstName} {this.state.lastName}</p>
        <p> your gender : {this.state.gender}</p>
        <p> your fav color : {this.state.favColor}</p>
        
      </div>
    )
  }


}

export default App;
