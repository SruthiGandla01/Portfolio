import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sruthi Gandla !</span>
            <br />
            A passionate Data Analyst and Engineer currently pursuing my Master’s in Data Analytics and Engineering at Northeastern University, Boston.
            <br />
            I aspire to bridge the gap between data and strategic business outcomes.
            <br />
            Apart from analyzing datasets and deploying models, some of my favorite activities include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the latest trends in Data Science & AI
            </li>
            <li className="about-activity"> 
              <ImPointRight /> Writing insightful reports and storytelling with data
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing new cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing intuitive dashboards and UIs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Data is not just numbers; it's a story waiting to be told."{" "}
          </p>
          <footer className="blockquote-footer">Sruthi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
