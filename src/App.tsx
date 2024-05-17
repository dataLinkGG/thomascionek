import { BackTop } from "antd";
import { Home } from "./pages";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <BackTop />
    </div>
  );
}

export default App;
