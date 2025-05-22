import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../Layout/Context/Authcontext";

const Register = () => {
  const {createUser}=use(Authcontext)
  const [error,setError]=useState("")
  const navigate =useNavigate()
  const handlerSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

     createUser(email,password)
     .then(res=> {
      navigate("/")
       setError("");
      console.log(res.user)})
     .catch(error => {console.log(error)})
     // validate password
     const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     if (!passwordValidate.test(password)) {
       setError(
         "Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
       );
     }
  };

  return (
    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center mt-3 text-4xl font-bold">Registration Now!</h1>
      <div className="card-body">
        <form onSubmit={handlerSubmit} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral  mt-4">Registration</button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="text-green-500 underline" to={"/login"}>
            Login
          </Link>{" "}
        </p>
        <span className="text-red-400"> {error }</span>
      </div>
    </div>
  );
};

export default Register;
