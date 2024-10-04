import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Icon from "../../assets/icons";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const  year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, aut!
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <Icon.YouTubeIcon />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <Icon.GithubIcon />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <Icon.FacebookIcon />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <Icon.InstagramIcon />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">DisCover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex  align-items-center gap-2">
                    <span>
                      <Icon.MapIcon />
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">John deo ,India</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex  align-items-center gap-2">
                    <span>
                      <Icon.MailIcon />
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">tourandtravels@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex  align-items-center gap-2">
                    <span>
                      <Icon.PhoneIcon />
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0">+0123456789</p>
                </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className = "text-center pt-5">
          <p className="copyright">Copyright {year}, design and develop by Mohd Azharuddin. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
