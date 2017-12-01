import React, {Component} from 'react';

class Modal extends Component {
	constructor(props){
		super(props)
		this.state = {
			isModalOpen: false
		}
	}

	 modal = (e) =>{
      const state = this.state;
      state.isModalOpen = true;
      this.setState(state);
    }

    

	render(){
		return(
			<div>
				<button onClick={this.state.isModalOpen}>Set The Game UP!</button>
			</div>
			)
	}
}

export default Modal;