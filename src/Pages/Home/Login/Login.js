import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../UseFirebse/Firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    navigate("/home");
  };

  if (user) {
    console.log(user);
    navigate("/home");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl  w-96 bg-base-100">
            <form onSubmit={handelSubmit} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary text-white">Login</button>
              </div>
              <p>
                l have a no account :
                <Link to={"/reagister"} className="text-secondary font-bold">
                  Reagister Now
                </Link>{" "}
              </p>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">OR</div>
              </div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary text-white"
              >
                Sing In Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
