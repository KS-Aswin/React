import Input from "./input";
import "../App.css";

function Register(props) {
  return (
    <>
      <div className="container">
        <h1>{props.isRegistered ? "Log In" : "Register"}</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {!props.isRegistered  && <Input type="password" placeholder="Confirm Password"/>}
          <button type="submit">
            {props.isRegistered ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
