import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { dark } from "./styles/Themes";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./sections/Home";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import About from "./sections/AboutUs";

function App() {
  const containerRef = useRef(null);

  return (
    <div>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{smooth: true}}
          watch={[]}
          // location={asPath}
          containerRef={containerRef}
          // onLocationChange={(scroll) =>
          //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
          // } // If you want to reset the scroll position to 0 for example
          // onUpdate={() => console.log("Updated, but not on location change!")} // Will trigger on
        >
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Home />
              <About />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
