import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable global search input
 */
const GlobalSearch = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  style = {},
//   autoFocus = false,
}) => {
  return (
    <div className={`global-search ${className}`} style={{ position: 'relative', ...style }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        // autoFocus={autoFocus}
        className="form-control pe-5"
        style={{ paddingRight: '2.5rem' }}
      />
      <span
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: '#888',
        }}
      >
        🔍
      </span>
    </div>
  );
};

GlobalSearch.propTypes = {
  value: PropTypes.string.isRequired,       // Controlled value
  onChange: PropTypes.func.isRequired,      // Called with new text
  placeholder: PropTypes.string,            // Placeholder text
  className: PropTypes.string,              // Extra CSS classes
  style: PropTypes.object,                  // Inline style overrides
//   autoFocus: PropTypes.bool,                // Focus on mount
};

export default GlobalSearch;
