import PropTypes from "prop-types";

export const App = ({ children }) => <div className="min-h-screen w-full bg-gray-900 flex p-2">{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};