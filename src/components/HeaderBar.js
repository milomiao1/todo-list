import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HeaderBar.css';

const HeaderBar = ({ title, buttons }) => {
  return (
    <div className="header-bar">
      <h2 className="header-title">{title}</h2>
      <div className="header-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="header-button"
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default HeaderBar;