import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("access-token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("access-token")) {
    return <Navigate to="/" />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export const Pages = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);