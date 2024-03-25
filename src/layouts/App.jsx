import PropTypes from "prop-types";

export const App = ({ children, className }) => <div className={className}>{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};