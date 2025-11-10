import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CustomButton from '../../Common/button/CustomButton';
import plus from '../../../assets/iotimages/plusIcon.png';
import deleteicon from '../../../assets/iotimages/delete-pic.png';
import NewCustomTabs from '../../Common/tabs/newTabs/NewCustomTabs';
import BackButton from '../../Common/back/BackButton';
// import avatar from '../../../assets/iotimages/defaultIcon.png';
import UserCard from '../../Common/card/UserCard';
// import editImg from "../../../assets/iotnewimages/edit-img.png"
import ControllerDetailsCard from '../../Controller/ControllerDetailsCard';
import AlldetailsTab from './AlldetailsTab';
import SettingTab from './SettingTab';
import ChartTab from './ChartTab';
import merge from "../../../assets/iotnewimages/merge.png"
import whiteEdit from "../../../assets/iotnewimages/edit-white.png"
import location from "../../../assets/iotnewimages/location.png"

const addBTnStyle = {
  background: '#2C67BA',
  borderRadius: '50px',
};
const deleteBtnStyle = {
  background: '#F3494C',
  borderRadius: '50px',
};
const detailsBTnStyle = {
  background: '#203955',
  borderRadius: '5px',
};


const MotorPumpDetails = () => {
  const [openAddUser, setOpenAddUser] = useState(false);
//   const [openAddDevice, setOpenAddDevice] = useState(false);
//   const [openAddGroup, setOpenAddGroup] = useState(false);
  const handleAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const tabs = [
    { key: 'All-Details', label: 'All Details', component: <AlldetailsTab /> },
    { key: 'setting', label: 'Setting', component: <SettingTab /> },
    { key: 'chart', label: 'Chart', component: <ChartTab /> },
  ];

  const userData = {
    id: 1,
    u_id: '861826076456355',
    run_time: '0',
    pressure: '0 Bar',
    access_type: 'Admin',
    hv: '3.1',
    total_water_dispatch: "OKL",
    Group:"Khordha",
    Block: "Khordha",
    gp:"khordha",
    dist:"khordha",
    sv:"3.12cv",
    power_uses:"0",
  };
  return (
    <div className="dashboard-page page-container">
      <div className=" dashboard-page-top-sec pb-3">
        <div className="page-heading">Power & Water Consumption Dashboard</div>
      </div>
      <div className="dashboard-card-section">
        <div className="dashboard-all-card-section  details-page water-tank-label">
          <Card>
            <CardBody>
              <div className="user-description-page">
                <div className="dashboard-page ">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <BackButton />
                      <div className="controller-page-header">Motor Pump Details</div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-end gap-2">
                        <CustomButton
                          image={plus}
                          label="Add Device"
                          color="transparent"
                          style={addBTnStyle}
                          onClick={handleAddUser}
                          className="noBorder"
                        />
                        <CustomButton
                          image={deleteicon}
                          label="Delete Device"
                          color="transparent"
                          style={deleteBtnStyle}
                          // onClick={handleAddUser}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Row>
                    <Col lg="4">
                      
                      <div className='h-100'>
                        <ControllerDetailsCard 
                            userName='Bhakarsahi - 1'
                            className="h-100"
                        />
                      </div>
                    </Col>
                    <Col lg="8">
                      <div className="h-100">
                        <UserCard
                          noAvatar
                          name="Controller Details"
                          headerRight={
                            <>
                              <div className="notification-badge">Notification</div>
                            </>
                          }
                        >
                          <div
                            className="card-user-details notification-card"
                            style={{ cursor: 'pointer' }}
                            // onClick={() => handelUserDescription(ele?.id)}
                          >
                            <div>
                              <p className="mb-0 label">ID</p>
                              <p className="mb-0 value">{userData?.u_id}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Ran Time</p>
                              <p className="mb-0 value">{userData?.run_time}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Pressure</p>
                              <p className="mb-0 value">{userData?.pressure}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Access Type</p>
                              <p className="mb-0 value">{userData?.access_type}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Hardware Version</p>
                              <p className="mb-0 value">{userData?.hv}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Total Water dispatched</p>
                              <p className="mb-0 value">{userData?.total_water_dispatch}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Group</p>
                              <p className="mb-0 value">{userData?.Group}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Block</p>
                              <p className="mb-0 value">{userData?.Block}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Gram Panchayat</p>
                              <p className="mb-0 value">{userData?.gp}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">District</p>
                              <p className="mb-0 value">{userData?.dist}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Software Version</p>
                              <p className="mb-0 value">{userData?.sv}</p>
                            </div>
                            <div>
                              <p className="mb-0 label">Power Usage</p>
                              <p className="mb-0 value">{userData?.power_uses}</p>
                            </div>
                          </div>
                          <hr />
                          <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-2'>
                            <CustomButton
                              image={merge}
                              label="Merge"
                              color="transparent"
                              style={detailsBTnStyle}
                              // onClick={handleAddUser}
                              className="noBorder"
                            />
                            <CustomButton
                              image={whiteEdit}
                              label="Eb Service Number"
                              color="transparent"
                              style={detailsBTnStyle}
                              // onClick={handleAddUser}
                              className="noBorder"
                            />
                            <CustomButton
                              image={whiteEdit}
                              label="Pipe Details"
                              color="transparent"
                              style={detailsBTnStyle}
                              // onClick={handleAddUser}
                              className="noBorder"
                            />
                            </div>
                            <div className='d-flex gap-2 align-items-center motor-details-notification-bottom justify-content-end'>
                               <input type='checkbox' />
                               <div className='image-sec'>
                                <img src={location} alt='location' />
                               </div>
                               <p className='mb-0'>Location is fixed</p>
                            </div>
                          </div>
                        </UserCard>
                      </div>
                    </Col>
                    
                    <Col md="12" className="ps-3 mt-4">
                      <div className="tab-sec">
                        <NewCustomTabs tabs={tabs} defaultActive={0} />
                      </div>
                    </Col>
                  </Row>
                </div>
            
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default MotorPumpDetails;
