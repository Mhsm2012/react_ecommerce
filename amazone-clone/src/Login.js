import { Link } from "@material-ui/core";
import React from "react";
import "./Login.css"


function Login(){
    return(
        <div className="login">
            <Link>
            <img alt="logo" className="login__logo" src=""/>
            </Link>
            <div className="login__container"> 
            <h1>Sign In</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="email"/>
                <h5>Password</h5>
                <input type="password"/>
                <button type="submit" className="login__signInButton">Sign In </button>

            </form>
            <p> by signing in , you agree to our shop terms and conditions</p>
            <button className="login__registerBtn">Create your shop account </button>
            </div>
            
        </div>
    )
}
export default Login