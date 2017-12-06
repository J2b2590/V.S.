import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Form.css'
import Park from '../Park/Park.js'
import Modal from 'react-modal';



class Form extends Component{

	constructor(props){
		super(props);

		this.state = {
			modalIsOpen: false,
			users: [],
			name: '',
			age: '',
			phoneNumber: '',
			comment: ''
		}
		this.openModal = this.openModal.bind(this)
		this.afterOpenModal = this.afterOpenModal.bind(this);
    	this.closeModal = this.closeModal.bind(this);
	}

	 // componentDidMount(){

  //   fetch('http://localhost:3001/users')
  //       .then(response => response.json())
  //       .then(data =>{
  //        console.log(data)
  //        const state = this.state
  //        state.data = data;
  //        this.setState(state)
  //       })
  //       console.log(this.state.data)
  // }



	openModal(){
		this.setState({modalIsOpen: true});
	}	

	afterOpenModal() {
    	this.subtitle.style.color = '#f00';
 	 }
 
 	 closeModal() {
    	this.setState({modalIsOpen: false});
 	 }


	handleForm = (e) =>{
		const state = this.state;
		// state[e.target.name] = e.currentTarget.value;
		this.setState(state)
		if (e.target.name === "name"){
			state.name = e.currentTarget.value
		// console.log(e.currentTarget.value, 'handleForm')
		// console.log(state.name, 'name')
		} else if(e.target.name === 'age'){
			state.age = e.currentTarget.value
			// console.log(state.age, 'age')
		} else if(e.target.name === 'phoneNumber'){
			state.phoneNumber = e.currentTarget.value
			// console.log(state.phoneNumber, 'phone')
		}else if(e.target.name === 'comment'){
			state.comment = e.currentTarget.value
		}
		console.log(state)
	}


	 

	handleSubmit = (e) => {

		e.preventDefault();
		this.addToList({ name: this.state.name, age: this.state.age, phoneNumber: this.state.phoneNumber, comment: this.state.comment })
		//ajax call
		const body = JSON.stringify({ name: this.state.name, age: this.state.age, phoneNumber: this.state.phoneNumber, comment: this.state.comment });
		console.log(body)
		fetch('http://localhost:3001/user',{
			headers: {'Content-Type': 'application/json'},
			method: 'POST',
			body: body
		}).then((response)=>{
			// console.log(JSON.stringify(response))
			return response.json()
			// console.log(response)
		})


	}
	 // updateDb = () =>{

  //   fetch('http://localhost:3001/users')
  //       .then(response => response.json())
  //       .then(data =>{
  //        console.log(data)
  //        const state = this.state
  //        state.data = data;
  //        this.setState(state)
  //       })
  // }
 
	 addToList = (name) =>{
	    const state = this.state;
	    state.users.push(name)
	    this.setState(state)
	    console.log(name,'name')
	    console.log(this.state.users,'users')
	    this.props.grabUsers(this.state.users);
	  }

	


	render(){ 




		//pass props of location into modal to determine where you are at
		return(
			<div className="Mod">
			<button onClick={this.openModal}>Set The Game Up!!!!</button>
			<div >
			
			<Modal 
				isOpen={this.state.modalIsOpen}

				style={{
					
					content: {
						backgroundColor: 'lightgreen',
						color: 'lightsteelblue'
					}

				}}

				>
				
          		
         		 
				<form>
				<h1>Set Your Game Up at {this.props.Park.park}</h1>

				<input name="name" type="text"        placeholder="Your Name" onChange={this.handleForm} value={this.state.name}/>
				<input name="age" type="text"         placeholder="Your Age" onChange={this.handleForm} value={this.state.age}/>
				<input name="phoneNumber" type="text" placeholder="Your phoneNumber" onChange={this.handleForm} value={this.state.phoneNumber}/>
				<textarea name="comment" type='text'  placeholder="Leave comments about your up coming game" onChange={this.handleForm} value={this.state.comment}/>
				<button onClick={this.handleSubmit}>Make Game</button>
				</form>
				<button onClick={this.closeModal}>close</button>

				</Modal>
			</div>
			

			</div>


			)
	}
}







export default Form;