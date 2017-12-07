import React, {Component} from 'react';
import './Login.css';

class Login extends Component {

	login = (e) => {
		if(e.key === 'Enter'){
			this.props.login(e.target.value)
		}
	}

	render(){
		return(

		<div className="loginBox">

			<div>
				<img src="./images/LoginTennis.png" className="Tennis-logo" />
			</div>


			<div>
				<img src="./images/court.png"  className="court" />
			</div>
		
			

			<div>
				<h2>Username Login</h2>
				<input  className="userNameBox"  type='text' onKeyPress={this.login}/>
			</div>

			<div>
				<img className="grass" src="./images/grass.png"/>
			</div>
			

		</div>
			)
	}
}

export default Login;