import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home.jsx";
import { NotFound } from "./NotFound.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);