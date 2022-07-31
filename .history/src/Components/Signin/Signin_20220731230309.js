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
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX">
                      Password
                    </label>
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="text-white">
                      <i class="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" class="text-white">
                      <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" class="text-white">
                      <i class="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p class="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
