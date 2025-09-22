import React from 'react';
import { Card, CardBody } from 'reactstrap';
import UserCard from '../Common/card/UserCard';
import CustomButton from '../Common/button/CustomButton';
import editIcon from '../../assets/iotimages/editIcon.png';
import deleteIcon from '../../assets/iotimages/deleteicon.png';

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
  return (
    <div className="controller-card">
      <Card className="controller-tab-card">
        <CardBody>
          <div className='user-description-tabs-content'>
            <UserCard
              headerRight={
                <>
                  <CustomButton
                    image={deleteIcon}
                    label="Remove"
                    color="transparent"
                    style={deviceBTnStyle}
                    onClick={() => console.log('Add Device')}
                  />
                  <CustomButton
                    image={editIcon}
                    label="Edit"
                    color="transparent"
                    style={groupBtnStyle}
                    onClick={() => console.log('Add Group')}
                  />
                </>
              }
            >
              
                    <div className='card-user-details-page'>
                        <div>
                            <p className="mb-0 label">Controller ID</p>
                            <p className="mb-0 value">861826076461652</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Access Type</p>
                            <p className="mb-0 value">Operator</p>
                        </div>
                        <div>
                            <p className="mb-0 label">Controller Name</p>
                            <p className="mb-0 value">S.Maliguda6</p>
                        </div>
                    </div>
                
            </UserCard>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default Groups;
