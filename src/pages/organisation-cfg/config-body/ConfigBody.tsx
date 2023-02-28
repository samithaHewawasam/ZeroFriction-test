import { Col, Row } from "antd";

import AddressCard from "./cards/AddressCard";
import ContactDetailsCard from "./cards/ContactDetailsCard";
import OrganizationDetailsCard from "./cards/OrganizationDetailsCard";

/**
 * @description Responsive Columns
 * @returns Body
 */
const ConfigBody = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} xl={8}>
        <OrganizationDetailsCard />
      </Col>
      <Col xs={24} xl={8}>
        <AddressCard />
      </Col>
      <Col xs={24} xl={8}>
        <ContactDetailsCard />
      </Col>
    </Row>
  );
};

export default ConfigBody;
