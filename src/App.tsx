import { Outlet } from "react-router-dom";
import { NAME } from "./constants";
import AppTitle from "./components/app/AppTitle";
import Navbar from "./components/NavBar/Navbar";

import { Home } from "./pages";

function App() {
  return (
    <div className="container">
      <AppTitle title={NAME} />
      <Navbar />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
