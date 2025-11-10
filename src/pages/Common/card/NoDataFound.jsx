import React from "react";
import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import nodatafoundImg from "../../../assets/iotnewimages/no-data-found.png";

const NoDataFound = ({ className }) => {
  return (
    <Card className={`new-controller-tab-card ${className ?? ""}`}>
      <CardBody>
        <div className="no-data-found-page d-flex justify-content-center align-items-center">
          <div className="no-data-found-card text-center">
            <img src={nodatafoundImg} alt="No Data" />
            <p>No data found</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

NoDataFound.propTypes = {
  className: PropTypes.string,
};

export default NoDataFound;
