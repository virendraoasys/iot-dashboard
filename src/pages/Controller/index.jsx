// import React from "react";
import Select from 'react-select'
import ControllerCard from './ControllerCard'
// import CountCard from './CountCard';
// import img1 from "../../assets/iotimages/d-icon-1.png"
// import img2 from "../../assets/iotimages/d-icon-2.png"
// import img3 from "../../assets/iotimages/d-icon-3.png"
// import img4 from "../../assets/iotimages/d-icon-4.png"
// import img5 from "../../assets/iotimages/d-icon-5.png"
// import img6 from "../../assets/iotimages/d-icon-6.png"

const Controller = ()=>{
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const data = [
        {
  userName: "Sachin Das",
  batteryLevel: 60,
  powerStatus: "Power Failure",
  isOnline: true,
  lastUpdate: "10-09-2025 | 19:00:31",
  lastUpdateRight: "21-08-2025 15:25:51",
  voltageData: {
    R: { voltage: 249, current: 0 },
    Y: { voltage: 244, current: 0 },
    B: { voltage: 248, current: 0 }
  },
  metrics: {
    tank: 0,
    flowMeter: 0,
    valve: 0,
    multi: 0
  }
}
    ]
    return(
        <div className="dashboard-page ">
            <div className="d-flex justify-content-between align-items-center">
                <div className="page-heading">Controller</div>
                <div className="select-sec d-flex gap-2">
                    <Select options={options} className="select-field"/>
                    <Select options={options} className="select-field" />
                </div>
            </div>
            <div className="top-cards d-flex justify-content-between">
                {data?.map(e => (
                    <div key={e.id} className="">
                    <ControllerCard 
                      userName={e.userName}
                      batteryLevel={e.batteryLevel}
                      powerStatus={e.powerStatus}
                      isOnline={e.isOnline}
                      lastUpdate={e.lastUpdate}
                      lastUpdateRight={e.lastUpdateRight}
                      voltageData={e.voltageData}
                      metrics={e.metrics}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Controller;