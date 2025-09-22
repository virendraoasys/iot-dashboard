import React, { useState } from 'react';
import Select from 'react-select';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CustomButton from '../Common/button/CustomButton';
import plus from '../../assets/iotimages/plusIcon.png';
import deleteicon from '../../assets/iotimages/deleteicon.png';
import GlobalSearch from '../Common/GlobalSearch';
import CustomTabs from '../Common/tabs/CustomTabs';
import Group from './Group';
import Controller from './Controller';
import AddUser from './AddUser';

const addBTnStyle = {
  background: '#2C67BA',
  padding: '5px 12px',
  borderRadius: '50px',
};
const deleteBtnStyle = {
  background: '#F3494C',
  padding: '5px 12px',
  borderRadius: '50px',
};
// const deviceBTnStyle = {
//   background: '#E09110',
//   padding: '5px 5px',
//   borderRadius: '5px',
// };
// const groupBtnStyle = {
//   background: '#293DA1',
//   padding: '5px 5px',
//   borderRadius: '5px',
// };

const UserDescription = () => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const handleAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const options = [
    { value: 'motor', label: 'Motor' },
    { value: 'power', label: 'Power' },
  ];
  const tabs = [
    { key: 'group', label: 'Group', component: <Group /> },
    { key: 'controller', label: 'Controller', component: <Controller /> },
  ];
  //   const userData = [
  //     {
  //       id: 1,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //       id: 2,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //       id: 3,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //       id: 4,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //       id: 5,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //         id:6,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //         id: 7,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //     {
  //         id: 8,
  //       name: 'Rajesh Kumar',
  //       mobile_no: '7894561234',
  //       user_type: 'Sub user',
  //       admin_type: 'Level 2 admin',
  //       created_at: '17/02/2025',
  //     },
  //   ];
  return (
    <div className="user-description-page">
      <div className="dashboard-page ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-heading">User Details</div>
          <div className="select-sec d-flex gap-2">
            <Select options={options} className="select-field" />
            <Select options={options} className="select-field" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Row>
          <Col md="6">
            <div className="d-flex gap-2">
              <Select options={options} className="select-field" />
              <GlobalSearch />
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex justify-content-end gap-2">
              <CustomButton
                image={plus}
                label="Add User"
                color="transparent"
                style={addBTnStyle}
                onClick={handleAddUser}
              />
              <CustomButton
                image={deleteicon}
                label="Delete User"
                color="transparent"
                style={deleteBtnStyle}
                // onClick={handleAddUser}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <Row>
          <Col md="4">
            <Card className="user-card">
              <CardBody>
                <div className="card-user-details-page">
                  <div>
                    <p className="mb-0 label">Name</p>
                    <p className="mb-0 value">Rajesh Kumar</p>
                  </div>
                  <div>
                    <p className="mb-0 label">User Type</p>
                    <p className="mb-0 value">Sub User</p>
                  </div>
                  <div>
                    <p className="mb-0 label">User Name</p>
                    <p className="mb-0 value">maheswarmali</p>
                  </div>
                  <div>
                    <p className="mb-0 label">Contact No</p>
                    <p className="mb-0 value">7684845899</p>
                  </div>
                  <div>
                    <p className="mb-0 label">Password</p>
                    <p className="mb-0 value">12345678</p>
                  </div>
                  <div>
                    <p className="mb-0 label">Email</p>
                    <p className="mb-0 value">rp@hotmail.com</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8" className="ps-3">
            <div className="tab-sec">
              <CustomTabs tabs={tabs} defaultActive={0} />
            </div>
          </Col>
        </Row>
      </div>
      <AddUser toggle={handleAddUser} isOpen={openAddUser} />
    </div>
  );
};
export default UserDescription;
