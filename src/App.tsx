import { Outlet } from "react-router-dom";
import { NAME } from "./constants";
import AppTitle from "./components/app/AppTitle";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <AppTitle title={NAME} />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
