import Nav from "./components/NavBar/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MySkills from "./pages/MySkills";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Profile />
        <AboutMe />
        <MySkills />
        <ContactMe />
      </main>
      <footer>
        <p>
          © 2024 | This website was powered by Vite and deployed on Github
          Pages.
        </p>
      </footer>
    </>
  );
}

export default App;
