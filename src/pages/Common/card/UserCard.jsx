import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader } from 'reactstrap';

const UserCard = ({ noAvatar = false,name, avatar, headerRight, children, headerClass = '', bodyClass = '' }) => {
  return (
    <Card className="user-card h-100">
      <CardHeader className={`d-flex justify-content-between align-items-center ${headerClass} user-card-header`}>
        {name ?
           <div className={`d-flex align-items-center ${noAvatar ? "": "avatar-sec" }`}>
          {avatar && (
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="me-2 rounded-circle"
              style={{ height: 20, width: 20, objectFit: 'cover' }}
            />
          )}
          <h5 className="mb-0 header-name">{name}</h5>
        </div>
        :<div></div>
        }
       
        <div className="d-flex gap-1">{headerRight}</div>
      </CardHeader>

      <CardBody className={bodyClass}>{children}</CardBody>
    </Card>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  headerRight: PropTypes.node,
  children: PropTypes.node,
  headerClass: PropTypes.string,
  bodyClass: PropTypes.string,
  noAvatar: PropTypes.bool,
};

export default UserCard;
