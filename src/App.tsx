import { NAME } from "./constants";
import AppTitle from "./components/app/AppTitle";
import { Home } from "./pages";

function App() {
  return (
    <div className="container">
      <AppTitle title={NAME} />
      <Home />
    </div>
  );
}

export default App;
