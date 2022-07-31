import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleSignInUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  return (
    // <div>
    //   <h2>SignIn Now</h2>
    //   <button onClick={() => signInWithGoogle()} className="Btn">
    //     Google Singin
    //   </button>
    //   <button onClick={() => signInWithGithub()} className="Btn">
    //     Github Singin
    //   </button>
    //   <button onClick={() => signInWithFacebook()} className="Btn">
    //     Facebook Singin
    //   </button>

    //   <form onSubmit={handleSignInUser}>
    //     <input
    //       onBlur={handleEmailBlur}
    //       type="email"
    //       placeholder="your email"
    //       required
    //     />{" "}
    //     <br />
    //     <input
    //       onBlur={handlePasswordBlur}
    //       type="password"
    //       placeholder="your password"
    //       required
    //     />{" "}
    //     <br />
    //     <p>{error?.message}</p>
    //     <input type="submit" value="Submit" />
    //   </form>
    //   <p>
    //     new to user <Link to="/Register">Register Now</Link>
    //   </p>
    // </div>
  );
}

export default Signin;
