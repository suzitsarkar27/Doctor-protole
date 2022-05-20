import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../UseFirebse/Firebase.init";
import Loding from "../../Loding/Loding";

const SingUp = () => {
  const namelRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const name = namelRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    await createUserWithEmailAndPassword(email, password, repassword);
    navigate("/appointment");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl w-96     bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  ref={namelRef}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-Password</span>
                </label>
                <input
                  type="password"
                  ref={repasswordRef}
                  placeholder="Re-Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link mt-2 link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
              <p>
                Allready have accound :{" "}
                <Link to={"/login"} className="text-secondary font-bold">
                  Login Now
                </Link>
              </p>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <input
                  type="submit"
                  onClick={() => signInWithGoogle()}
                  value={"Sing In Google"}
                  className="input input-bordered btn btn-primary text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
