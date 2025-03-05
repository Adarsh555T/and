import React from 'react'
import { GoogleOAuthProvider,GoogleLogin  } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "./Googlelogin.css";

const Googlelogin = () => {
    const navigate = useNavigate();

    const successhandler = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        console.log(decoded);
        let mydata = {"name":decoded.name,"email":decoded.email,"picture":decoded.picture};
        let store = localStorage.setItem("user", JSON.stringify(mydata));
        navigate("/dashboard");

    }
    const errorhandler = () => {
        console.log("Google login failed");
    }

  return (
    <div className="googlelogin">
        <h1>Signup or Login Page</h1>
        <GoogleOAuthProvider clientId="221413879560-bmhan7rudo5179pbt75sqru2po7ql398.apps.googleusercontent.com">
        <GoogleLogin
  onSuccess={successhandler}
  onError={errorhandler}
/>
            </GoogleOAuthProvider>

    </div>
  )
}

export default Googlelogin;