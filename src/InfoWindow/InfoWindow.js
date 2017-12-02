import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
		
		const infoPark = this.props.parks.map((park, i)=>{
		 

		console.log(i)
		
	});
		

		


		return(
			<div>
				<button onClick={this.window}>Set The Game UP!</button>
				
			</div>
			)
	}
}

export default InfoWindow;