import React from "react";
import { Col, Row } from "react-bootstrap";
import './Footer.css'
export const Footer = () => {
  return (
    <div className="Footer">
      <Row>
        <Col sm={12} md={2}>
            <div>
          <p>Contact</p>
          <ul>
            <li>Street No. 9  Block 6103</li>
            <li> Cairo, Egypt.</li>
            <li>Hotline: 19999</li>
          
          </ul>
          </div>
        </Col>
 
     
        <Col sm={12} md={2}>
            <div>
          <p>
Follow us on</p>
          <ul>
            <li>FaceBook</li>
            <li> Instagram</li>
            <li> LinkedIn</li>
            <li> YouTube</li>
           
          </ul>
          </div>
        </Col>
        <Col sm={12} md={3}>
            <div>
          <p>Be in the Know</p>
          <p className="pspecial">
          Stay in the know! subscribe to our mailing list to get the latest news and information
          </p>
          <input className="input" type="email" placeholder="Enter your Email"></input>
          </div>
        </Col>
        </Row>
        <p className="CopyRights text-center">© 2023 . all rights reserved.</p>
        <p className="CopyRights text-center">Created by AhmedSamir || c.eng.ahmedsamir@gmail.com</p>
     
    </div>
  );
};
