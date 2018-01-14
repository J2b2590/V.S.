import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import Park from './Park/Park.js';
import Form from './Form/Form.js';
import Users from './Users/User.js';


class App extends Component {

    constructor(){
      super()

      this.state = {
        username: '',
        isLoggedIn: false,
        parks: [],
        modal: false,
        users: []
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

   
    grabUsers = (users) => {
      const state = this.state;
      state.users = users;
      this.setState(state);
      console.log(this.state.users, 'all the users hosting')
    }


    login = (e) =>{
      const state = this.state;
      state.isLoggedIn = true;
      this.setState(state);
    }





  render() {
    return (
  <div>
      
      {this.state.isLoggedIn ? <Park parks={this.state.parks} users={this.state.users} grabUsers={this.grabUsers}/>  : <Login login={this.login}/>}
     
  </div>

    );
  }
}

export default App;
