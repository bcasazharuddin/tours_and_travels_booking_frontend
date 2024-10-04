import React from "react";
import { Container,Row,Col } from "reactstrap";

const PageNotFound = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3" style={{
                color:"#0b2727"
            }}>Sorry, Page Not found</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageNotFound;
