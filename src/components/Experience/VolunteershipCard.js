import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function VolunteershipCard({ imgPath, title, company, date, description }) {
  return (
    <div className="timeline-item">   {/* <-- Important */}
      <div className="timeline-dot">
        {imgPath && (
          <img
            src={imgPath}
            alt="logo"
            className="timeline-logo"  // Make sure you have same CSS for timeline-logo
          />
        )}
      </div>

      <div className="timeline-content">
        <Card className="project-card-view">
          <Card.Body>
            <Row>
              {/* Left content */}
              <Col md={8} xs={8}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  {title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1rem" }}>
                  {company}
                </Card.Subtitle>
              </Col>

              {/* Right date */}
              <Col md={4} xs={4} style={{ textAlign: "right" }}>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
                  {date}
                </Card.Subtitle>
              </Col>
            </Row>

            {/* Description */}
            <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
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

export default VolunteershipCard;

