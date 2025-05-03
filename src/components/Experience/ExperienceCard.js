import React from "react";
import { Card,Row,Col } from "react-bootstrap";
import { DefaultContext } from "react-icons/lib";
function ExperienceCard({ imgPath, company, role, date, description }) {
    return (
      <div className="timeline-item">
        <div className="timeline-dot">
          <img src={imgPath} alt="company logo" className="timeline-logo" />
        </div>
  
        <div className="timeline-content">
          <Card className="project-card-view">
            <Card.Body>
              <Row>
                <Col md={8} xs={8}>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                    {company}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1rem" }}>
                    {role}
                  </Card.Subtitle>
                </Col>
  
                <Col md={4} xs={4} style={{ textAlign: "right" }}>
                  <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
                    {date}
                  </Card.Subtitle>
                </Col>
              </Row>
  
              <Card.Text as="div" style={{ textAlign: "justify", marginTop: "10px" }}>
                <ul style={{ paddingLeft: "20px" }}>
                  {description.map((point, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
  
export default ExperienceCard;