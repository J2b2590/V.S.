import React, {Component} from 'react';


class Login extends Component {

	login = (e) => {
		if(e.key === 'Enter'){
			this.props.login(e.target.value)
		}
	}

	render(){
		return(
			
			
				<input type='text' onKeyPress={this.login}/>
			
			)
	}
}

export default Login;