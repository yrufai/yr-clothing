import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/signIn-signUp/signIn-signUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { CurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					CurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			CurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInandSignUpPage} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	CurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
