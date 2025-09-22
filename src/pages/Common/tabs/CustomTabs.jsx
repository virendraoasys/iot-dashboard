import PropTypes from "prop-types";
import { useState } from "react";
import "./customtab.css";

const CustomTabs = ({ tabs, defaultActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key || idx}
            type="button" 
            className={`tab-btn ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeIndex].component}
      </div>
    </div>
  );
};

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActive: PropTypes.number,
};

export default CustomTabs;
