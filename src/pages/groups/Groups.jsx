import React, { useState } from 'react';
import Select from 'react-select';
import { Col, Row } from 'reactstrap';
import CustomButton from '../Common/button/CustomButton';
import plus from '../../assets/iotimages/plusIcon.png';
import deleteicon from '../../assets/iotimages/deleteicon.png';
import editicon from "../../assets/iotimages/editIcon.png";
import GlobalSearch from '../Common/GlobalSearch';
import UserCard from '../Common/card/UserCard';
import AssignGroups from './AssignGroups';
import AddGroup from './AddGroup';

// import Group from './Group';
// import Controller from './Controller';



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
const deviceBTnStyle = {
  background: '#F94B55',
  padding: '5px 5px',
  borderRadius: '5px',
};
const groupBtnStyle = {
  background: '#293DA1',
  padding: '5px 5px',
  borderRadius: '5px',
};

const Groups = () => {
   const [openAssignGroup, setOpenAssignGroup] = useState(false);
   const [openAddGroup, setOpenAddGroup] = useState(false);
  const options = [
    { value: 'motor', label: 'Motor' },
    { value: 'power', label: 'Power' },
  ];
//     const tabs = [
//     { key: 'group', label: 'Group', component: <Group /> },
//     { key: 'controller', label: 'Controller', component: <Controller /> },
//   ];
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
  const handelAssignGroup =()=>{
    setOpenAssignGroup(!openAssignGroup)
  }
  const handelAddGroup =()=>{
    setOpenAddGroup(!openAddGroup)
  }
  return (
    <div className='user-description-page'>
      <div className="dashboard-page ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-heading">All Groups</div>
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
                label="Add Group"
                color="transparent"
                style={addBTnStyle}
                onClick={handelAddGroup}
              />
              <CustomButton
                image={deleteicon}
                label="Delete Group"
                color="transparent"
                style={deleteBtnStyle}
                // onClick={handleAddUser}
              />
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
                  
                  headerRight={
                    <>
                     
                      <CustomButton
                        image={editicon}
                        label="Assign Group"
                        color="transparent"
                        style={groupBtnStyle}
                        onClick={handelAssignGroup}
                      />
                       <CustomButton
                        image={deleteicon}
                        label="Delete"
                        color="transparent"
                        style={deviceBTnStyle}
                        onClick={() => console.log('Add Device')}
                      />
                    </>
                  }
                >
                    <div className='card-user-details' 
                        // style={{ cursor: 'pointer' }}
                        // onClick={() => handelUserDescription(ele?.id)}
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
      <AssignGroups 
        isOpen={openAssignGroup}
        toggle={handelAssignGroup}
      />
      <AddGroup 
        isOpen={openAddGroup}
        toggle={handelAddGroup}
      />
    </div>
  );
};
export default Groups;
