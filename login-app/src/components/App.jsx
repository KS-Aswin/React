import LoginIn from "./login";
import Register from "./register";
import "../App.css";

var isRegistered = true;
function App() {
  return <Register isRegistered={isRegistered} />;
}

export default App;
