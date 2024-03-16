import { Row, Col, Input } from "antd";
import React from "react";

function CustomInput({ Placeholder = "Smit", onChange }) {
    return (
        <Row>
            <Col>
                <Input placeholder={Placeholder} onChange={onChange}></Input>
            </Col>
        </Row>
    )
}
export default CustomInput