import React, { useContext, useState } from "react";
import classes from "./Singnup.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";

const Auth = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  // console.log(email, password);

  const [{user}, dispatch] = useContext(DataContext); 
// console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name)

    if (e.target.name == "SignIn") {
      // firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* form */}

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            className={classes.login_signInBtn}
            name="SignIn"
          >
            Sign In
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in, you agree to the Aazon Fack Clone Condition of Use &
          Sale. Please see our Privacy notice, our Cookies notice and our
          Interest-Based Ads Notice.
        </p>
        {/* creat account bt */}
        <button
          type="submit"
          onClick={authHandler}
          className={classes.login_registerBtn}
          name="SignUp"
        >
          Creat Your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
