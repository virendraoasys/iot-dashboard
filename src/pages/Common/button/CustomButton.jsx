import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomButton = ({
  image,
  label,
  onClick,
  color = 'primary',
  className = '',
  imgAlt = '',
  ...rest
}) => {
  return (
    <div className="" {...rest}>
      <Button color={color} onClick={onClick} className={`custom-btn-design d-flex gap-2 align-items-center ${className || ""}`}>
      {image && (
        <img
          src={image}
          alt={imgAlt || label}
          className=""
          style={{ height: "100%", width: "100%" }}
        />
      )}
      
        {label === "" ? "": label}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  image: PropTypes.string,      // Optional image URL
  imgAlt: PropTypes.string,     // Alt text for the image
  label: PropTypes.string,      // Button text
  onClick: PropTypes.func,      // Click handler
  color: PropTypes.string,      // Reactstrap color: 'primary', 'success', etc.
  className: PropTypes.string,  // Extra CSS classes for outer div
};

CustomButton.defaultProps = {
  label: 'Add',
  onClick: () => {},
  color: 'primary',
  className: '',
  imgAlt: '',
};

export default CustomButton;
