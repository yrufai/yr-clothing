import React from "react";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signIn.style.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			email: "",
			password: "",
		});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						label="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						type="password"
						name="password"
						label="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							Sign In with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
