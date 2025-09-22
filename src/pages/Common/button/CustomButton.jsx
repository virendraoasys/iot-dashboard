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
    <div className={`d-inline-flex align-items-center ${className}`} {...rest}>
      {image && (
        <img
          src={image}
          alt={imgAlt || label}
          className="me-2"
          style={{ height: 24, width: 24, objectFit: 'cover' }}
        />
      )}
      <Button color={color} onClick={onClick} className="" style={{color:"#fff",padding:0}}>
        {label}
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
