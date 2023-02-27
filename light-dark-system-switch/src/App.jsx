import { useState } from "react";
import "./App.css";

import { useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");


  //This returns the root element of the document
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  function onWindowMatch () {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMatch();  

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark")
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch()
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (e.matches) {
      element.classList.add("dark");
    }else {
      element.classList.remove("dark")
    }
  })

  function handleSwitch(text) {
    return setTheme(text)
  }

  return (
    <section className="min-h-screen pt-8 dark:bg-slate-900 dark:text-gray-100 duration-100">
      <Navbar theme={theme} handleSwitch={handleSwitch}/>
      <div className="max-w-4xl mx-auto px-8 mt-12">
        <div className="text-center">
          {/* <h1 className="text-3xl text-center uppercase font-bold">
            Life as a Protocol Officer
          </h1> */}
          <img
            src="https://www.cftchurches.org/images/com_osgallery/gal-1/thumbnail/02383DF697-4D66-2F3F-471A-9276E838334F.jpg"
            alt="protocol image"
            className="text-center mt-6 rounded-xl w-full mb-4"
          />
          <h5 className="italic">Share And Subscribe</h5>
        </div>
        <p className="dark:text-slate-300 mt-6 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
          Ut porttitor leo a diam. Massa sed elementum tempus egestas sed sed.
          Purus ut faucibus pulvinar elementum integer enim. Lacus suspendisse
          faucibus interdum posuere lorem ipsum. Diam sollicitudin tempor id eu
          nisl. Ipsum a arcu cursus vitae congue mauris rhoncus. Id aliquet
          risus feugiat in ante metus dictum at tempor.
        </p>
        <p className="dark:text-slate-300 mt-6 leading-8">
          At tellus at urna condimentum mattis. Ullamcorper velit sed
          ullamcorper morbi tincidunt ornare massa eget. Nibh praesent tristique
          magna sit. Eu volutpat odio facilisis mauris sit amet. Malesuada fames
          ac turpis egestas integer eget aliquet. Dignissim enim sit amet
          venenatis urna cursus. Sit amet consectetur adipiscing elit duis
          tristique. Amet est placerat in egestas erat imperdiet sed euismod.
        </p>
        <br />
      </div>
    </section>
  );
}

export default App;
