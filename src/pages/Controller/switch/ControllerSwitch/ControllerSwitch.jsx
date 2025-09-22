import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ControllerSwitch.scss';

const ControllerSwitch = ({ 
  isOn = false, 
  onToggle, 
  disabled = false,
  size = 'medium' 
}) => {
  const [internalState, setInternalState] = useState(isOn);

  const handleToggle = () => {
    if (disabled) return;
    
    const newState = !internalState;
    setInternalState(newState);
    
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className={`controller-switch ${size} ${disabled ? 'disabled' : ''}`}>
      <div 
        className={`switch-container ${internalState ? 'on' : 'off'}`}
        onClick={handleToggle}
      >
        <div className="switch-track">
          {internalState && <p className="text-start">ON</p>}
          <div className="switch-thumb"></div>
          {!internalState && <p className="text-end">OFF</p>}
        </div>
       
      </div>
    </div>
  );
};

ControllerSwitch.propTypes = {
  isOn: PropTypes.bool,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default ControllerSwitch;