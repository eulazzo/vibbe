import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { dark } from "./styles/Themes";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./sections/Home";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const containerRef = useRef(null);

  return (
    <div>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //...all the dependencies you want to watch to update the scroll EXCEPT the location one
            ]
          }
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
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
