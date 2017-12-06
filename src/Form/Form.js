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
	
	 addToList = (name) =>{
	    const state = this.state;
	    state.users.push(name)
	    this.setState(state)

	    console.log(name,'name')
	    console.log(this.state.users,'users')
	    // this.props.grabUsers(this.state.users);
	  }




	render(){ 
		// const users = this.props.users.map((user, i)=>{
		// 	<div key={i}>user.name</div>
		// })




		//pass props of location into modal to determine where you are at
		return(
			<div className="Mod">
			<button onClick={this.openModal}>Set The Game Up!!!!</button>
			<div >
			
			<Modal 
				isOpen={this.state.modalIsOpen}
				ariaHideApp={false}

				style={{
					
					overlay: {

						postion: 'fixed',
						top    : 0,
						left   : 0,
						right  : 0,
						bottom : 0,
						backgroundColor: 'rgba(255,255,255,0.75)'

					},
					content: {
						
						postion: 'absolute',
						top : '150px',
						bottom: '330px',
						left: '150px',
						right: '150px',
						border: '5px solid #ccc',
						background: '#ffff',
						borderRadius: '10px'
					}

				}}

				>
				
          		
         		 
				<form className="ReactModal_Content">
				<h1 className="title">Set Your Game Up at {this.props.Park.park}</h1>

				<input className="one" name="name" type="text"        placeholder="Your Name" onChange={this.handleForm} value={this.state.name}/>
				<input className="one" name="age" type="text"         placeholder="Your Age" onChange={this.handleForm} value={this.state.age}/>
				<input className="one" name="phoneNumber" type="text" placeholder="Your phoneNumber" onChange={this.handleForm} value={this.state.phoneNumber}/>
				
				<textarea className="one two" name="comment" type='text'  placeholder="Leave comments about your up coming game" onChange={this.handleForm} value={this.state.comment}/>
				</form>
				<div className="modBut">
				<button onClick={this.handleSubmit}>Make Game</button>
				
				<button onClick={this.closeModal}>close</button>
				</div>
				</Modal>
			</div>
			

			</div>


			)
	}
}







export default Form;