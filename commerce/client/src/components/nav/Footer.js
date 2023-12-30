import React, { useState } from "react";
import { Layout, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterApp = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Footer style={{ textAlign: 'center', padding: '20px 50px' }}>
      <Row justify="space-between">
        <Col xs={24} sm={12} md={6}>
          <h4>Follow Us</h4>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a><br/>
          <a href="#" target="_blank" rel="noreferrer">Twitter</a>
        </Col>
        <Col xs={24} sm={12} md={9}>
          <h4>About</h4>
          <Link to="/about" style={{ color: '#123456' }}>About Us</Link><br/>
          <Link to="/contact" style={{ color: '#123456' }}>Contact Us</Link>
        </Col>
        <Col xs={24} sm={12} md={9}>
          <h4>Tips & Guide</h4>
          {/* Leave the section empty as instructed */}
        </Col>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Col><span>2023@DTFMTL</span></Col>
        <Col>
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms-conditions">Terms of Conditions and Use</Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterApp;
