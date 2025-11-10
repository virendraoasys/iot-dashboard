import React from 'react';
import { Card, CardBody } from 'reactstrap';
import NoDataFound from '../../Common/card/NoDataFound';
import AllDetailsControllerPage from './AllDetailsContrllerPage';

const data = [
  { id: 1, dateTime: '04-11-2025 12:02:10', status: 'ON', reason: 'Unknown' },
  { id: 2, dateTime: '04-11-2025 12:02:10', status: 'OFF', reason: 'Unknown' },
  { id: 3, dateTime: '04-11-2025 12:02:10', status: 'ON', reason: 'Unknown' },
  { id: 4, dateTime: '04-11-2025 12:02:10', status: 'OFF', reason: 'Unknown' },
];
const tableData = [
  {
    sl_no: 1,
    farmer_name:"Sachin",
    crop_name:"Milet",
    crop_type: "Rabi",
    income: "10000",
    mob_no:"7894561230",
    access_type:"Control"
  },
  {
    sl_no: 1,
    farmer_name:"Sachin",
    crop_name:"Milet",
    crop_type: "Rabi",
    income: "10000",
    mob_no:"7894561230",
    access_type:"Control"
  },
  {
    sl_no: 1,
    farmer_name:"Sachin",
    crop_name:"Milet",
    crop_type: "Rabi",
    income: "10000",
    mob_no:"7894561230",
    access_type:"Control"
  },
  {
    sl_no: 1,
    farmer_name:"Sachin",
    crop_name:"Milet",
    crop_type: "Rabi",
    income: "10000",
    mob_no:"7894561230",
    access_type:"Control"
  },
  {
    sl_no: 1,
    farmer_name:"Sachin",
    crop_name:"Milet",
    crop_type: "Rabi",
    income: "10000",
    mob_no:"7894561230",
    access_type:"Control"
  },
];
const AlldetailsTab = () => {
  return (
    <div className="new-controller-card">
      {data.length === 0 ? (
        <NoDataFound />
      ) : (
        <Card className="all-details-tab-card">
          <CardBody>
            <div className="">
              <AllDetailsControllerPage data={data} tableData={tableData} />
            </div>
          </CardBody>
        </Card>
      )}
     
    </div>
  );
};
export default AlldetailsTab;
