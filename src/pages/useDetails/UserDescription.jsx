import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import CustomButton from '../Common/button/CustomButton';
import plus from '../../assets/iotimages/plusIcon.png';
// import deleteicon from '../../assets/iotimages/delete-pic.png';
import AddUser from './AddUser';
import NewCustomTabs from '../Common/tabs/newTabs/NewCustomTabs';
import BackButton from '../Common/back/BackButton';
import AddDevice from './AddDevice';
import AddGroup from '../groups/AddGroup';
import group from "../../assets/iotimages/userIcon.png"
import avatar from '../../assets/iotimages/defaultIcon.png';
import UserCard from '../Common/card/UserCard';
import GroupTab from './GorupTab';
import ControllerTab from './ControllerTab';

// const addBTnStyle = {
//   background: '#2C67BA',
//   // padding: '5px 12px',
//   borderRadius: '50px',
// };
// const deleteBtnStyle = {
//   background: '#F3494C',
//   // padding: '5px 12px',
//   borderRadius: '50px',
// };
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
  const [openAddDevice, setOpenAddDevice] = useState(false)
  const [openAddGroup, setOpenAddGroup] = useState(false)
  const handleAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const tabs = [
    { key: 'group', label: 'Group', component: <GroupTab /> },
    { key: 'controller', label: 'Controller', component: <ControllerTab /> },
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
  const deviceBTnStyle = {
  background: '#F94B55',
  borderRadius: '5px',
};
const groupBtnStyle = {
  background: '#293DA1',
  borderRadius: '5px',
};
  const handelAddGroup =()=>{
    setOpenAddGroup(!openAddGroup)
  }
    const handelAddDevice = () =>{
    setOpenAddDevice(!openAddDevice)
  }
  const userData = {
      id: 1,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    }
  return (
    <div className="user-description-page">
      <div className="dashboard-page ">
       
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <BackButton />
            <div className="controller-page-header">User Details</div>
          </div>
          <div>
            {/* <div className="d-flex justify-content-end gap-2">
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
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Row>
          <Col lg="4">
            <div className=''>
           
                <UserCard
                  name={userData?.name}
                  avatar={avatar}
                  headerRight={
                    <>
                      <CustomButton
                        image={plus}
                        label="Device"
                        color="transparent"
                        style={deviceBTnStyle}
                        onClick={handelAddDevice}
                      />
                      <CustomButton
                        image={group}
                        label="Group"
                        color="transparent"
                        style={groupBtnStyle}
                        onClick={handelAddGroup}
                      />
                    </>
                  }
                >
                    <div className='card-user-details' 
                        style={{ cursor: 'pointer' }}
                        // onClick={() => handelUserDescription(ele?.id)}
                    >
                        <div>
                            <p className="mb-0 label">Name</p>
                            <p className="mb-0 value">{userData?.name}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Mobile No</p>
                            <p className="mb-0 value">{userData?.mobile_no}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">User type</p>
                            <p className="mb-0 value">{userData?.user_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Admin type</p>
                            <p className="mb-0 value">{userData?.admin_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Created at</p>
                            <p className="mb-0 value">{userData?.created_at}</p>
                        </div>
                    </div>
                  
                </UserCard>
            </div>
           
          </Col>
          <Col lg="8">
                  <div className='h-100'>
           
                <UserCard
                  headerRight={
                    <>
                      <div style={{height:"35px"}}></div>
                     
                    </>
                  }
                >
                    <div className='card-user-details notification-card' 
                        style={{ cursor: 'pointer' }}
                        // onClick={() => handelUserDescription(ele?.id)}
                    >
                        <div>
                            <p className="mb-0 label">Name</p>
                            <p className="mb-0 value">{userData?.name}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Mobile No</p>
                            <p className="mb-0 value">{userData?.mobile_no}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">User type</p>
                            <p className="mb-0 value">{userData?.user_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Admin type</p>
                            <p className="mb-0 value">{userData?.admin_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Created at</p>
                            <p className="mb-0 value">{userData?.created_at}</p>
                        </div>
                    </div>
                  
                </UserCard>
            </div>
          </Col>
          {/* <Col md="4">
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
          </Col> */}
          <Col md="12" className="ps-3 mt-4">
            <div className="tab-sec">
              <NewCustomTabs tabs={tabs} defaultActive={0} />
            </div>
          </Col>
        </Row>
      </div>
      <AddUser toggle={handleAddUser} isOpen={openAddUser} />
       <AddDevice 
              toggle={handelAddDevice}
              isOpen={openAddDevice}
            />
            <AddGroup 
              toggle={handelAddGroup}
              isOpen={openAddGroup}
            />
    </div>
  );
};
export default UserDescription;
