import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Home />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
