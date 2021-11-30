import "./App.css";

import Nav from "./Components/Nav/Nav";
import Head from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ExpEdu from "./Pages/ExpEdu/ExpEdu";
import Sample from "./Pages/Sample/Sample";

function App() {
  return (
    <div className="App container">
      <Nav />
      <Head active />
      <About />
      <ExpEdu />
      <Sample />
    </div>
  );
}

export default App;
