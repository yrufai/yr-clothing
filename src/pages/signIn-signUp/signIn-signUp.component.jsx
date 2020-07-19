import React from "react";

import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./signIn-signUp.style.scss";

const SignInandSignUpPage = () => (
  <div className="signIn-signUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInandSignUpPage;
