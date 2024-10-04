import React from 'react'
import CommonSection from '../shared/CommonSection'
import Newsletter from '../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import ServiceList from '../services/ServiceList'

const About = () => {
  return (
    <>
    <CommonSection title={"About"} />
    {/* ============= hero section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>{" "}
            {/* ============= hero section start =============== */}
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ============= hero section end =============== */}
    <Newsletter/>

    </>
  )
}

export default About