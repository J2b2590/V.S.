import React, {Component} from 'react';

class InfoWindow extends Component {
	constructor(props){
		super(props)
		this.state = {
			isWindowOpen: false
		}
	}

	 window = (e) =>{
      const state = this.state;
      state.isWindowOpen = true;
      this.setState(state);
    }
	
    

	render(){


		return(
			<div>
				<button onClick={this.window}>Set The Game UP!</button>
				<h1>hey there</h1>
			</div>
			)
	}
}

export default InfoWindow;