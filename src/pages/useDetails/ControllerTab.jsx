import React from 'react';
import { Card, CardBody } from 'reactstrap';
import NoHeaderDetailsCard from '../Common/card/NoHeaderDetailsCard';
import CustomButton from '../Common/button/CustomButton';
import editIcon from '../../assets/iotimages/editIcon.png';
import deleteIcon from '../../assets/iotimages/delete-pic.png';
import NoDataFound from '../Common/card/NoDataFound';

const deviceBTnStyle = {
  background: '#F94B55',
  borderRadius: '5px',
};
const groupBtnStyle = {
  background: '#293DA1',
  borderRadius: '5px',
};

const data = [];
const ControllerTab = () => {
  return (
    <div className="new-controller-card">
        {data.length === 0
              ? 
             <NoDataFound />
             :
      <Card className="new-controller-tab-card">
        <CardBody>
          <div className="user-description-tabs-content">
            {data.length === 0
              ? 
             ""
              : data.map((e) => (
                  <NoHeaderDetailsCard key={e?.id}>
                    <div className="card-user-details-page">
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
                        onClick={() => console.log('Remove Device')}
                      />
                      <CustomButton
                        image={editIcon}
                        label="Edit"
                        color="transparent"
                        style={groupBtnStyle}
                        onClick={() => console.log('Edit Group')}
                      />
                    </div>
                  </NoHeaderDetailsCard>
                ))}
          </div>
        </CardBody>
      </Card>
}
    </div>
  );
};
export default ControllerTab;
