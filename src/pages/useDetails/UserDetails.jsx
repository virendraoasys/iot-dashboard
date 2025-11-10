import React, { useState } from 'react';
import Select from 'react-select';
import { Col, Label, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Common/button/CustomButton';
import plus from '../../assets/iotimages/plusIcon.png';
import deleteicon from '../../assets/iotimages/delete-pic.png';
import group from '../../assets/iotimages/userIcon.png';
import GlobalSearch from '../Common/GlobalSearch';
import UserCard from '../Common/card/UserCard';
import avatar from '../../assets/iotimages/defaultIcon.png';
// import CustomModal from '../Common/modal/CustomModal';
import AddDevice from './AddDevice';
import AddGroup from './AddGroup';
import AddUser from './AddUser';


const addBTnStyle = {
  background: '#2C67BA',
  // padding: '5px 12px',
  borderRadius: '50px',
};
const deleteBtnStyle = {
  background: '#F3494C',
  // padding: '5px 12px',
  borderRadius: '50px',
};
const deviceBTnStyle = {
  background: '#E09110',
  // padding: '5px 5px',
  borderRadius: '5px',
};
const groupBtnStyle = {
  background: '#293DA1',
  // padding: '5px 5px',
  borderRadius: '5px',
};

const UserDetails = () => {
  const navigate = useNavigate();
  const [openAddDevice, setOpenAddDevice] = useState(false)
  const [openAddGroup, setOpenAddGroup] = useState(false)
  const [openAddUser, setOpenAddUser] = useState(false)

  const handelUserDescription = (id) => {
    navigate(`/user-details/${id}`);
  };
  const options = [
    { value: 'motor', label: 'Motor' },
    { value: 'power', label: 'Power' },
  ];
  const userData = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
      id: 5,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
        id:6,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
        id: 7,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
    {
        id: 8,
      name: 'Rajesh Kumar',
      mobile_no: '7894561234',
      user_type: 'Sub user',
      admin_type: 'Level 2 admin',
      created_at: '17/02/2025',
    },
  ];
  const handelAddDevice = () =>{
    setOpenAddDevice(!openAddDevice)
  }
  const handelAddGroup = () =>{
    setOpenAddGroup(!openAddGroup)
  }
  const handleAddUser = () =>{
    setOpenAddUser(!openAddUser)
  }
  return (
    <div className='user-details-page'>
      <div className="dashboard-page ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="controller-page-header">Available Users <span>12</span></div>
          <div>
              <div className="d-flex justify-content-end gap-2">
              <CustomButton
                image={plus}
                label="Add User"
                color="transparent"
                style={addBTnStyle}
                onClick={handleAddUser}
                className="noBorder"
              />
              <CustomButton
                image={deleteicon}
                label="Delete User"
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
          <Col md="12">
            <div className="d-flex gap-2 align-items-center">
              <Select options={options} className="select-field" />
              <GlobalSearch />
              <div className='d-flex align-items-center'>
                <input type='checkbox' />
                <Label className="ms-2 m-0">Empty User</Label>
              </div>
            </div>
          </Col>
          
        </Row>
      </div>
      <div className="mt-4">
        <div className='page-user-cards'>
          {userData?.map((ele, i) => {
            return (
              <div key={++i}>
                <UserCard
                  name={ele?.name}
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
                        onClick={() => handelUserDescription(ele?.id)}
                    >
                        <div>
                            <p className="mb-0 label">Name</p>
                            <p className="mb-0 value">{ele?.name}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Mobile No</p>
                            <p className="mb-0 value">{ele?.mobile_no}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">User type</p>
                            <p className="mb-0 value">{ele?.user_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Admin type</p>
                            <p className="mb-0 value">{ele?.admin_type}</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Created at</p>
                            <p className="mb-0 value">{ele?.created_at}</p>
                        </div>
                    </div>
                  
                </UserCard>
              </div>
            );
          })}
        </div>
      </div>
      {/* {openAddDevice && (
        <CustomModal 
            toggle={handelAddDevice}
            isOpen={openAddDevice}
        >

      )} */}
      <AddDevice 
        toggle={handelAddDevice}
        isOpen={openAddDevice}
      />
      <AddGroup 
        toggle={handelAddGroup}
        isOpen={openAddGroup}
      />
      <AddUser
        toggle={handleAddUser}
        isOpen={openAddUser}
      />
    </div>

  );
};
export default UserDetails;
