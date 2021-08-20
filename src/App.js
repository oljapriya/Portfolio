import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
      /> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
