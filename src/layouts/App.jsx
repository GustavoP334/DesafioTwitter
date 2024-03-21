import PropTypes from "prop-types";

export const App = ({ children }) => <div className="flex items-center justify-center container mx-auto px-4 min-h-screen w-full bg-gray-900 flex p-2">{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};