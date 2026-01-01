import { cleanup, render } from "@testing-library/react";
import { Navbar, Footer } from "../components/layout";
import {
  Hero,
  Stats,
  About,
  Experience,
  Skills,
  FeaturedProjects,
  Contact,
} from "../components/sections";
import { experiences, getInTouch, stats } from "../editable-stuff/config";

const renderLandingPage = () =>
  render(
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </>
  );

afterEach(() => {
  cleanup();
});

describe("Landing page stability", () => {
  test("renders core layout sections", () => {
    renderLandingPage();

    expect(document.querySelector("nav")).toBeInTheDocument();
    expect(document.querySelector("#hero")).toBeInTheDocument();
    expect(document.querySelector("#stats")).toBeInTheDocument();
    expect(document.querySelector("#about")).toBeInTheDocument();
    expect(document.querySelector("#experience")).toBeInTheDocument();
    expect(document.querySelector("#skills")).toBeInTheDocument();
    expect(document.querySelector("#projects")).toBeInTheDocument();
    expect(document.querySelector("#contact")).toBeInTheDocument();
    expect(document.querySelector("footer")).toBeInTheDocument();
  });

  test("stats render count matches config", () => {
    renderLandingPage();

    const statValues = document.querySelectorAll("#stats h3");
    expect(statValues).toHaveLength(stats.data.length);
  });

  test("experience renders one entry per config item", () => {
    renderLandingPage();

    const logos = document.querySelectorAll("#experience img");
    expect(logos).toHaveLength(experiences.data.length);
  });

  test("contact mailto uses configured email", () => {
    renderLandingPage();

    const mailtoLinks = document.querySelectorAll(
      `#contact a[href="mailto:${getInTouch.email}"]`
    );
    expect(mailtoLinks.length).toBeGreaterThan(0);
  });
});
