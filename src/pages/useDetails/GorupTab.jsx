import React from 'react';
import { Card, CardBody } from 'reactstrap';
import NoHeaderDetailsCard from '../Common/card/NoHeaderDetailsCard';
import CustomButton from '../Common/button/CustomButton';
import editIcon from '../../assets/iotimages/editIcon.png';
import deleteIcon from '../../assets/iotimages/delete-pic.png';

const deviceBTnStyle = {
  background: '#F94B55',
  borderRadius: '5px',
};
const groupBtnStyle = {
  background: '#293DA1',
  borderRadius: '5px',
};

const data=[
    {id:"861826076461652",type:"Operator", name:"S.Maliguda6" },
    {id:"861826076461652",type:"Operator", name:"S.Maliguda6" },
    {id:"861826076461652",type:"Operator", name:"S.Maliguda6" },
    {id:"861826076461652",type:"Operator", name:"S.Maliguda6" },
]
const GroupTab = () => {
  return (
    <div className="new-controller-card">
      <Card className="new-controller-tab-card">
        <CardBody>
          <div className="user-description-tabs-content">
            {data.map((e)=>{
                return(
                    <NoHeaderDetailsCard>

                 <div className="card-user-details-page" key={e?.id}>
                <div>
                  <p className="mb-0 label">Controller ID</p>
                  <p className="mb-0 value">{e?.id}</p>
                </div>
                <div>
                  <p className="mb-0 label">Access Type</p>
                  <p className="mb-0 value">{e?.type}</p>
                </div>
                <div>
                  <p className="mb-0 label">Controller Name</p>
                  <p className="mb-0 value">{e?.name}</p>
                </div>
              </div>
              <hr />
                <div className="d-flex gap-1 justify-content-end">
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
                </div>
            </NoHeaderDetailsCard>
                )
            })}
            
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default GroupTab;
