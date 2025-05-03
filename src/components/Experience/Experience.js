import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard"; // we will build this next
import VolunteershipCard from "./VolunteershipCard";
import rivieralogo from "../../Assets/Experience/rivieralogo1.png";    // <-- Import your logo images
import vitdclogo from "../../Assets/Experience/vitdclogo.png"; 
import berryLogo from "../../Assets/Experience/Berrylogo.jpeg"; // <-- Add your Berry logo here
import siyatonLogo from "../../Assets/Experience/Siyatonlogo.png";

import Particle from "../Particle";

function Experience() {
    return (
      <Container fluid className="about-section">
        <Particle />
     

        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Experience</strong>
          </h1>

          <div className="timeline-container">
            <div className="timeline-line"></div> {/* This is the vertical line */}

            <ExperienceCard
              imgPath={berryLogo}
              company="Berry Global Inc."
              role="Product Data Analyst Intern"
              date="June 2024 – Dec 2024 | Bristol, Rhode Island"
              description={[
                "Collected and analyzed operational data from sales, supply chain, and production pipelines, delivering insights that improved process efficiency across HVAC, Retail, and Automotive sectors. ",
                "Led advanced data analysis initiatives using Python, Tableau, and Power BI, uncovering customer buying patterns and shipping trends to optimize business strategies. ",
                "Developed predictive models, including multivariate regression and ARIMA, achieving 75%+ accuracy in trend forecasting to guide strategic decision-making and support inventory planning. ",
                "Streamlined sales reporting processes by automating SQL-based dashboards, reducing reporting time by 30%. "
              ]}
            />
  
            <ExperienceCard
              imgPath={siyatonLogo}
              company="Siyaton Software Solutions Pvt Ltd"
              role="Data Analyst Intern"
              date="Apr 2023 – Aug 2023 | Hyderabad, India"
              description={[
                "Led teams in formulating market strategies for Fortune 500 Companies, resulting in an 8% market share increase. ",
                "Employed SQL methodologies to extract and analyze diverse data sets, enhancing the depth of market research insights. ",
                "Created Tableau dashboards for in-depth analysis of different key performance indicators (KPIs) in digital advertising. ",
                "Catalyzed a 20% improvement in client product usage through Python-driven time series forecasting analysis. ",
                "Engaged in collaborative efforts with cross-functional teams within an Agile environment to provide valuable insights for business stakeholders. "
              ]}
            />
            </div>
          
  
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
            My <strong className="purple">Volunteerships</strong>
          </h1>

          <div className="timeline-container">
            <div className="timeline-line"></div> {/* This is the vertical line */}


              <VolunteershipCard
                imgPath={rivieralogo}
                title="Finance and Sponsorship Manager"
                company="Riviera Fest-VIT"
                date="Dec 2022 - Mar 2023 | Vellore,TamilNadu"
                description={[
                    "Managed One Million(rupees) budget, oversaw financial transactions with expertise in P&L reporting and Excel.",
                             
                    "Conducted audits for 150+ events, collaborated on sponsorship proposals, and implemented sales analytics." 
                ]}
                             />
            
  
            
              <VolunteershipCard
                imgPath={vitdclogo}
                title="Team Head"
                company="Dance Club-VIT"
                date="Jan 2020 - Sept 2022 | Vellore,Tamilnadu"
                description={[
                    
                "Directed workshops and choreography sessions while leading the club's strategic planning and event management.",
                 "Fostered member development through leadership initiatives and creative community-building activities."
                ]}
              />

              </div>
            
  
        </Container>
      </Container>
    );
  }
  
  export default Experience;