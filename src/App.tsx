import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/layout";
import {
  Hero,
  Stats,
  About,
  Skills,
  Experience,
  FeaturedProjects,
  Contact,
} from "./components/sections";
import "./index.css";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
