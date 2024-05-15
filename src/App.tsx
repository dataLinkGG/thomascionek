import { APP_TITLE } from "./constants";
import AppTitle from "./components/app/title";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <AppTitle title={APP_TITLE} />
      <Navbar />
    </>
  );
}

export default App;
