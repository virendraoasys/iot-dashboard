import React from "react";
import Select from 'react-select';
import { Col, Row } from "reactstrap";
import CustomButton from "../Common/button/CustomButton";
import plus from "../../assets/iotimages/plusIcon.png"

const addBTnStyle={
    background:"#2C67BA"
}

const UserDetails = ()=>{
    const options = [
        { value: 'motor', label: 'Motor' },
        { value: 'power', label: 'Power' },
    ];
    return(
        <>
            <div className="dashboard-page ">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="page-heading">User Details</div>
                    <div className="select-sec d-flex gap-2">
                    <Select options={options} className="select-field" />
                    <Select options={options} className="select-field" />
                    </div>
                </div>
            </div>
            <div>
                <Row>
                    <Col md="6">
                    </Col>
                    <Col md="6">
                    <div>
                        <CustomButton
                            image={plus}
                            label="Add User"
                            color="transparent"
                            style={addBTnStyle}
                            // onClick={handleAddUser}
                        />
                    </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default UserDetails;