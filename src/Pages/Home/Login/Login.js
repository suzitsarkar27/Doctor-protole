import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../UseFirebse/Firebase.init";
import Loding from "../../Loding/Loding";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  console.log(guser);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let singInError;

  if (error) {
    singInError = (
      <p className="text-red-600">{error?.message || gerror?.emessage}</p>
    );
  }

  if (user || guser) {
    navigate(from, { replace: true });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loding></Loding>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  w-96 bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {singInError}
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
              <p>
                l have a no account :
                <Link to={"/reagister"} className="text-secondary font-bold">
                  Reagister Now
                </Link>{" "}
              </p>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
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
