import { Outlet } from "react-router-dom";
import { APP_TITLE } from "./constants";
import AppTitle from "./components/app/title";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <AppTitle title={APP_TITLE} />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
