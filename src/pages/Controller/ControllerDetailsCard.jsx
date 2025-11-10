import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CardTitle } from 'reactstrap';
import './ControllerCard.scss';
import ControllerSwitch from './switch/ControllerSwitch/ControllerSwitch';
import Voltage from './Voltage/Voltage';
// import motionSensor from '../../assets/iotimages/controller/motion-sensor.png';
// import plumbing from '../../assets/iotimages/controller/plumbing.png';
// import sea from '../../assets/iotimages/controller/sea.png';
// import waterFilter from '../../assets/iotimages/controller/water-filter.png';
import CustomButton from '../Common/button/CustomButton';
import editImg from '../../assets/iotnewimages/edit-img.png';
import latLongIcon from "../../assets/iotnewimages/lat-long.png"


const ControllerDetailsCard = ({
  userName = 'Sachin Das',
  batteryLevel = 60,
  powerStatus = 'Power Failure',
  // isOnline = true,
  lastUpdate = '10-09-2025 | 19:00:31',
  lastUpdateRight = '21-08-2025 15:25:51',
  voltageData = {
    R: { voltage: 249, current: 0 },
    Y: { voltage: 244, current: 0 },
    B: { voltage: 248, current: 0 },
  },
  // metrics = {
  //   tank: 0,
  //   flowMeter: 0,
  //   valve: 0,
  //   multi: 0,
  // },
  className=""
}) => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitchToggle = (isOn) => {
    isOn.stopPropagation();
    console.log('Switch toggled:', isOn);
    setSwitchState(isOn);
  };

  const truncateText = (text, maxLength) => {
    console.log(text.length, maxLength);
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className={`controller-card controller-card-details ${className}`}>
      {/* Header Section */}
      <div className="card-header">
        {/* <div>{userName}</div> */}
        <CardTitle tag="h5" className="mb-0">
          {userName}
        </CardTitle>
        <div>
          <CustomButton
            image={editImg}
            label=""
            color="transparent"
            // style={FilterBtnStyle}
            // onClick={() => handleDeleteClick({ id: 1, name: 'Controller 1' })}
          />
        </div>
        {/* </div> */}
      </div>
      <div className="card-body">
        <div className="">
          <div className="status-info d-flex justify-content-center gap-4">
            <div className="battery-info">
              <span className="battery-icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33301 7.75006L11.833 14.5001H2.83301L7.33301 7.75006ZM7.33301 10.4501L5.63801 13.0001H9.02801L7.33301 10.4501ZM6.53748 5.92051C6.09821 5.48121 6.09821 4.76889 6.53748 4.32956C6.97683 3.89022 7.68919 3.89022 8.12854 4.32956C8.56781 4.76889 8.56781 5.48121 8.12854 5.92051C7.68919 6.35986 6.97683 6.35986 6.53748 5.92051ZM2.29488 0.0869141L3.35554 1.14757C1.15884 3.34428 1.15884 6.90586 3.35554 9.10254L2.29488 10.1632C-0.487615 7.38069 -0.487615 2.8694 2.29488 0.0869141ZM12.3711 0.0869141C15.1536 2.8694 15.1536 7.38069 12.3711 10.1632L11.3105 9.10254C13.5072 6.90586 13.5072 3.34428 11.3105 1.14757L12.3711 0.0869141ZM4.41619 2.20824L5.47686 3.26889C4.45173 4.29402 4.45173 5.95606 5.47686 6.98124L4.41619 8.04189C2.80528 6.43096 2.80528 3.81915 4.41619 2.20824ZM10.2498 2.20824C11.8608 3.81915 11.8608 6.43096 10.2498 8.04189L9.18919 6.98124C10.2143 5.95606 10.2143 4.29402 9.18919 3.26889L10.2498 2.20824Z"
                    fill="#3BB668"
                  />
                </svg>
              </span>
              <span className="battery-level">{batteryLevel}%</span>
            </div>

            <div className="power-status">
              <span className="power-text">{truncateText(powerStatus, 8)}</span>
            </div>

            <ControllerSwitch isOn={switchState} onToggle={handleSwitchToggle} size="medium" />
          </div>
        </div>
        <div className="update-times">
          <div className="last-update">
            <span className="update-label">Last update</span>
            <span className="update-time">{lastUpdate}</span>
          </div>

          <div className="refresh-icon">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.71946 2.69418C5.18028 1.43106 7.08457 0.666992 9.16732 0.666992C13.7697 0.666992 17.5007 4.39795 17.5007 9.00033C17.5007 10.7804 16.9425 12.4302 15.9917 13.7842L13.334 9.00033H15.834C15.834 5.31843 12.8492 2.33366 9.16732 2.33366C7.3755 2.33366 5.74879 3.04055 4.55084 4.19068L3.71946 2.69418ZM14.6152 15.3065C13.1543 16.5696 11.2501 17.3337 9.16732 17.3337C4.56494 17.3337 0.833984 13.6027 0.833984 9.00033C0.833984 7.22021 1.39214 5.57046 2.34298 4.21653L5.00065 9.00033H2.50065C2.50065 12.6822 5.48542 15.667 9.16732 15.667C10.9592 15.667 12.5858 14.9601 13.7838 13.81L14.6152 15.3065Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="last-update">
            <span className="update-label">Last update</span>
            <span className="update-time">{lastUpdateRight}</span>
          </div>
        </div>

        {/* Voltage Readings */}
        <div className="voltage-section">
          <Voltage type="R" volts={voltageData.R.voltage} current={voltageData.R.current} />
          <Voltage type="Y" volts={voltageData.Y.voltage} current={voltageData.Y.current} />
          <Voltage type="B" volts={voltageData.B.voltage} current={voltageData.B.current} />
        </div>

        {/* Metrics Section */}
        {/* <div className="metrics-section">
          <div className="metric-item">
            <span>
              <img src={waterFilter} alt="Motion Sensor Icon" className="metric-icon" />
            </span>
            <span className="metric-label">Tank: {metrics.tank}</span>
          </div>

          <div className="metric-item">
            <span>
              <img src={sea} alt="Plumbing Icon" className="metric-icon" />
            </span>
            <span className="metric-label">Flow Meter: {metrics.flowMeter}</span>
          </div>

          <div className="metric-item">
            <span>
              <img src={plumbing} alt=" Sea Icon" className="metric-icon" />
            </span>
            <span className="metric-label">Valve: {metrics.valve}</span>
          </div>

          <div className="metric-item">
            <span>
              <img src={motionSensor} alt="Water Filter Icon" className="metric-icon" />
            </span>
            <span className="metric-label">Multi: {metrics.multi}</span>
          </div>
        </div> */}
         <div className="update-times">
          <div className="last-update">
            <div className='d-flex align-items-center gap-2'>
              <div className='lat-long-icon'>
                <img src={latLongIcon} alt='lat long' />
              </div>
              <div>
                <div className="update-label">Latitude</div>
                <div className="update-time">20.1841  &apos;N</div>
              </div>
            </div>
            
          </div>

          <div className="last-update">
            <div className='d-flex align-items-center gap-2'>
              <div className='lat-long-icon'>
                <img src={latLongIcon} alt='lat long' />
              </div>
              <div>
                <div className="update-label">Longitude</div>
                <div className="update-time">86.0137  &apos;E</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

ControllerDetailsCard.propTypes = {
  userName: PropTypes.string,
  className: PropTypes.string,
  batteryLevel: PropTypes.number,
  powerStatus: PropTypes.string,
  // isOnline: PropTypes.bool,
  lastUpdate: PropTypes.string,
  lastUpdateRight: PropTypes.string,
  voltageData: PropTypes.object,
  // metrics: PropTypes.object,
};

export default ControllerDetailsCard;
