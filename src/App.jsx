import * as React from "react";
import Index from "./onepirate/Home";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import withRoot from "./onepirate/modules/withRoot";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/booking" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default withRoot(App);
