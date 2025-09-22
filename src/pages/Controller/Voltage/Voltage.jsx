import React from 'react'
import PropTypes from 'prop-types'
import "./Voltage.scss"

const Voltage = (
  { 
    type="",
    volts="",
    current=""
    }
) => {
  return (
    <div className={`voltage-item ${type === "R" ? "red" : type === "Y" ? "yellow" : "blue"}`}>
      <div className="voltage-letter">{type}</div>
      <div className="voltage-info">
        <span className="voltage-value">{volts} V</span>
        <span className="current-value">{current} A</span>
      </div>
    </div>
  )
}

Voltage.propTypes = {
  type: PropTypes.oneOf(["R", "Y", "B"]),
  volts: PropTypes.number,
  current: PropTypes.number
}


export default Voltage