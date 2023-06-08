import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";

function Apps() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Apps;
