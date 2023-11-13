import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./globalStyles";
import Router from "./Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
