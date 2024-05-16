import { Outlet } from "react-router-dom";
import { NAME } from "./constants";
import AppTitle from "./components/app/AppTitle";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="container">
      <AppTitle title={NAME} />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
