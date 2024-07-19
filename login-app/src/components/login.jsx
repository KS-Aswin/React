import Input from "./input";
import "../App.css";

function LoginIn() {
  return (
    <>
      <div className="container">
        <h1>Log In</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default LoginIn;
