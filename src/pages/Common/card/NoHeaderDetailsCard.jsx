import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

const NoHeaderDetailsCard = ({ children, bodyClass = '' }) => {
  return (
    <Card className="no-header-user-card">
      <CardBody className={bodyClass}>{children}</CardBody>
    </Card>
  );
};

NoHeaderDetailsCard.propTypes = {
  children: PropTypes.node,
  bodyClass: PropTypes.string,
};

export default NoHeaderDetailsCard;
