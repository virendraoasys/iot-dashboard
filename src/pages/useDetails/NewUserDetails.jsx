import React from 'react';
import { Card, CardBody } from 'reactstrap';

import UserDescription from './UserDescription';


const NewUserDetails = () => {

 
  return (
    <>
      <div className="dashboard-page page-container">
        <div className=" dashboard-page-top-sec pb-3">
          <div className="page-heading">Power & Water Consumption Dashboard</div>
          {/* <div className="select-sec d-flex gap-2">
                          <Select options={options} className="select-field" />
                          <Select options={options} className="select-field" />
                        </div> */}
          {/* <div className="top-cards d-flex justify-content-between ">
            {data?.map((e) => (
              <div key={e.id} className="all-count-card">
                <CountCard
                  image={e.image}
                  name={e.name}
                  count={e.count}
                  style={e?.style}
                  iconStyle={e?.iconStyle}
                />
              </div>
            ))}
          </div> */}
        </div>

        <div className='dashboard-card-section'>
            <div className='dashboard-all-card-section  details-page water-tank-label'>
                <Card>
                    <CardBody>
                       <UserDescription />
                    </CardBody>
                </Card>
                
            </div>
        </div>
      </div>
    </>
  );
};
export default NewUserDetails;
