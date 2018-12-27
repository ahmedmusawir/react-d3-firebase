import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;

  return (
    <nav
      id="header"
      className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"
    >
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">
          <i className="fa fa-address-book" aria-hidden="true" /> {branding}
        </NavLink>
        <ul className="navbar-nav ml-auto flex-row">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              <i className="fa fa-home" aria-hidden="true" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">
              <i className="fa fa-plus" aria-hidden="true" /> Add Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/firebase" className="nav-link">
              <i className="fa fa-question-circle" aria-hidden="true" />{' '}
              Firebase
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/circle" className="nav-link">
              <i className="fa fa-plus" aria-hidden="true" /> Circle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/barchart" className="nav-link">
              <i className="fa fa-plus" aria-hidden="true" /> Barchart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'React D3',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
