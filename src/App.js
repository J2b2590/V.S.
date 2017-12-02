import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import Park from './Park/Park.js';
import InfoWindow from './InfoWindow/InfoWindow.js';

class App extends Component {

    constructor(){
      super()

      this.state = {
        username: '',
        isLoggedIn: false,
        parks: [],
        modal: false
      }
    }

    componentDidMount(){
      fetch('https://data.cityofchicago.org/resource/eix4-gf83.json')
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        
        const state = this.state;
        state.parks = data;
        this.setState(state);
        console.log(state)


      })
    }
    
     modal = (e) =>{
      const state = this.state;
      state.modal = true;
      this.setState(state);
    }


    login = (e) =>{
      const state = this.state;
      state.isLoggedIn = true;
      this.setState(state);
    }





  render() {
    return (
  <div>
      {this.state.isLoggedIn ? <Park parks={this.state.parks}/>  : <Login login={this.login}/>}
      
  </div>
    );
  }
}

export default App;
