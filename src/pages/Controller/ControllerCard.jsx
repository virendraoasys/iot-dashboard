import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ControllerCard.scss';
import ControllerSwitch from "./switch/ControllerSwitch/ControllerSwitch"
import Voltage from './Voltage/Voltage';
import motionSensor from "../../assets/iotimages/controller/motion-sensor.png"
import plumbing from "../../assets/iotimages/controller/plumbing.png"
import sea from "../../assets/iotimages/controller/sea.png"
import waterFilter from "../../assets/iotimages/controller/water-filter.png"

const ControllerCard = ({
    userName = "Sachin Das",
    batteryLevel = 60,
    powerStatus = "Power Failure",
    // isOnline = true,
    lastUpdate = "10-09-2025 | 19:00:31",
    lastUpdateRight = "21-08-2025 15:25:51",
    voltageData = {
        R: { voltage: 249, current: 0 },
        Y: { voltage: 244, current: 0 },
        B: { voltage: 248, current: 0 }
    },
    metrics = {
        tank: 0,
        flowMeter: 0,
        valve: 0,
        multi: 0
    }
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
    }

    return (
        <div className="controller-card">
            {/* Header Section */}
            <div className="card-header">
                <div className="user-info">
                    <div className="user-avatar">
                        <span className="user-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00033 0.666992C13.6027 0.666992 17.3337 4.39795 17.3337 9.00033C17.3337 13.6027 13.6027 17.3337 9.00033 17.3337C4.39795 17.3337 0.666992 13.6027 0.666992 9.00033C0.666992 4.39795 4.39795 0.666992 9.00033 0.666992ZM9.13341 12.3337C7.43724 12.3337 5.91018 13.0576 4.84429 14.2133C5.98398 15.1232 7.42866 15.667 9.00033 15.667C10.6416 15.667 12.1442 15.0739 13.3058 14.0904C12.2467 13.0065 10.7686 12.3337 9.13341 12.3337ZM9.00033 2.33366C5.31843 2.33366 2.33366 5.31843 2.33366 9.00033C2.33366 10.5092 2.83491 11.9009 3.67997 13.0182C5.04732 11.5704 6.98486 10.667 9.13341 10.667C11.2037 10.667 13.0781 11.5058 14.4352 12.8622C15.2108 11.7726 15.667 10.4397 15.667 9.00033C15.667 5.31843 12.6822 2.33366 9.00033 2.33366ZM9.00033 3.16699C10.8412 3.16699 12.3337 4.65938 12.3337 6.50033C12.3337 8.34124 10.8412 9.83366 9.00033 9.83366C7.15938 9.83366 5.66699 8.34124 5.66699 6.50033C5.66699 4.65938 7.15938 3.16699 9.00033 3.16699ZM9.00033 4.83366C8.07983 4.83366 7.33366 5.57985 7.33366 6.50033C7.33366 7.42083 8.07983 8.16699 9.00033 8.16699C9.92083 8.16699 10.667 7.42083 10.667 6.50033C10.667 5.57985 9.92083 4.83366 9.00033 4.83366Z" fill="#1E1E1E" />
                            </svg>
                        </span>
                    </div>
                    <span className="user-name ">{truncateText(userName, 90)}</span>
                </div>

                
            </div>
            <div className="card-body">
                <div className=''>
                    <div className="status-info d-flex justify-content-center gap-4">
                    <div className="battery-info">
                        <span className="battery-icon">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33301 7.75006L11.833 14.5001H2.83301L7.33301 7.75006ZM7.33301 10.4501L5.63801 13.0001H9.02801L7.33301 10.4501ZM6.53748 5.92051C6.09821 5.48121 6.09821 4.76889 6.53748 4.32956C6.97683 3.89022 7.68919 3.89022 8.12854 4.32956C8.56781 4.76889 8.56781 5.48121 8.12854 5.92051C7.68919 6.35986 6.97683 6.35986 6.53748 5.92051ZM2.29488 0.0869141L3.35554 1.14757C1.15884 3.34428 1.15884 6.90586 3.35554 9.10254L2.29488 10.1632C-0.487615 7.38069 -0.487615 2.8694 2.29488 0.0869141ZM12.3711 0.0869141C15.1536 2.8694 15.1536 7.38069 12.3711 10.1632L11.3105 9.10254C13.5072 6.90586 13.5072 3.34428 11.3105 1.14757L12.3711 0.0869141ZM4.41619 2.20824L5.47686 3.26889C4.45173 4.29402 4.45173 5.95606 5.47686 6.98124L4.41619 8.04189C2.80528 6.43096 2.80528 3.81915 4.41619 2.20824ZM10.2498 2.20824C11.8608 3.81915 11.8608 6.43096 10.2498 8.04189L9.18919 6.98124C10.2143 5.95606 10.2143 4.29402 9.18919 3.26889L10.2498 2.20824Z" fill="#3BB668" />
                            </svg>
                        </span>
                        <span className="battery-level">{batteryLevel}%</span>
                    </div>

                    <div className="power-status">
                        <span  className="power-text">{truncateText(powerStatus, 10)}</span>
                    </div>

                    <ControllerSwitch
                        isOn={switchState}
                        onToggle={handleSwitchToggle}
                        size="medium"
                    />
                </div>
                </div>
                <div className="update-times">
                    <div className="last-update">
                        <span className="update-label">Last update</span>
                        <span className="update-time">{lastUpdate}</span>
                    </div>

                    <div className="refresh-icon">
                        <span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.71946 2.69418C5.18028 1.43106 7.08457 0.666992 9.16732 0.666992C13.7697 0.666992 17.5007 4.39795 17.5007 9.00033C17.5007 10.7804 16.9425 12.4302 15.9917 13.7842L13.334 9.00033H15.834C15.834 5.31843 12.8492 2.33366 9.16732 2.33366C7.3755 2.33366 5.74879 3.04055 4.55084 4.19068L3.71946 2.69418ZM14.6152 15.3065C13.1543 16.5696 11.2501 17.3337 9.16732 17.3337C4.56494 17.3337 0.833984 13.6027 0.833984 9.00033C0.833984 7.22021 1.39214 5.57046 2.34298 4.21653L5.00065 9.00033H2.50065C2.50065 12.6822 5.48542 15.667 9.16732 15.667C10.9592 15.667 12.5858 14.9601 13.7838 13.81L14.6152 15.3065Z" fill="black" />
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
                <div className="metrics-section">
                    <div className="metric-item">
                        <span >
                            <img src={waterFilter} alt="Motion Sensor Icon" className="metric-icon" />
                        </span>
                        <span className="metric-label">Tank: {metrics.tank}</span>
                    </div>

                    <div className="metric-item">
                        <span>
                            <img src={sea} alt="Plumbing Icon" className="metric-icon"  />
                        </span>
                        <span className="metric-label">Flow Meter: {metrics.flowMeter}</span>
                    </div>

                    <div className="metric-item">
                        <span >
                            <img src={plumbing} alt=" Sea Icon" className="metric-icon" />
                        </span>
                        <span className="metric-label">Valve: {metrics.valve}</span>
                    </div>

                    <div className="metric-item">
                        <span >
                            <img src={motionSensor} alt="Water Filter Icon" className="metric-icon"  />
                        </span>
                        <span className="metric-label">Multi: {metrics.multi}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ControllerCard.propTypes = {
    userName: PropTypes.string,
    batteryLevel: PropTypes.number,
    powerStatus: PropTypes.string,
    // isOnline: PropTypes.bool,
    lastUpdate: PropTypes.string,
    lastUpdateRight: PropTypes.string,
    voltageData: PropTypes.object,
    metrics: PropTypes.object,
};


export default ControllerCard;