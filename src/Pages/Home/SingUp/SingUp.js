import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../UseFirebse/Firebase.init";

const SingUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    createUserWithEmailAndPassword(email, password, repassword);
    console.log(email, password, repassword);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl w-96     bg-base-100">
            <form onSubmit={handelSubmit} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Re-Password</span>
                </label>
                <input
                  type="password"
                  ref={repasswordRef}
                  placeholder="Re-Password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link mt-2 link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary text-white">Login</button>
              </div>
              <p>
                Allready have accound :{" "}
                <Link to={"/login"} className="text-secondary font-bold">
                  Login Now
                </Link>
              </p>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">OR</div>
                <input
                  type="submit"
                  onClick={() => signInWithGoogle()}
                  value={"Sing In Google"}
                  class="input input-bordered btn btn-primary text-white"
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
