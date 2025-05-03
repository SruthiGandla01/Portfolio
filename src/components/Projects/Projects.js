import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Steam Game Recommendation system"
              description="A Steam game recommendation system that suggests personalized games based on user behavior and game genres. Built using a hybrid (KNN + content-based) model, deployed with Flask on GCP Kubernetes, enabling scalable, real-time recommendations"
              ghLink="https://github.com/PoojaKameshwaran/Steam-Select"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Prediction using LSTM"
              description="Built a deep learning-based stock market prediction system to forecast next-day market movements using historical price and economic data. Developed and compared CNN and LSTM models, applying advanced preprocessing like sequence windowing, SMOTE balancing, and precision-recall optimization to improve predictive accuracy. This system helps identify market trends more reliably, supporting better investment decision-making by modeling both short-term patterns and long-term dependencies in financial data."
              ghLink="https://github.com/SruthiGandla01/Stock-Market-Prediction-using-LSTM"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Customer Segmentation"
              description="A customer segmentation system that groups users based on purchasing behavior to improve marketing precision. Built using RFM analysis and K-means clustering in Python, it boosted targeted marketing effectiveness and business decision-making by over 15%."
              ghLink="https://github.com/SruthiGandla01/Customer_Segmentation_using_RFM_analysis"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Market Basket Analysis"
              description="Analyzed supermarket transactions to uncover product association patterns for smarter inventory and marketing strategies. Developed using MLXtend’s Apriori algorithm and Tableau visualizations, leading to a 25% boost in decision-making accuracy."
              ghLink="https://github.com/SruthiGandla01/MarketBasket_Analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI-based Customer Retention Predictor"
              description="A customer churn prediction system for the banking sector that identifies high-risk customers likely to leave. Built using machine learning models (Logistic Regression, Decision Tree, Random Forest) after comprehensive preprocessing, EDA, and feature engineering on real-world banking data. It enables banks to develop targeted retention strategies and reduce customer loss, driving revenue protection."
              ghLink="https://github.com/SruthiGandla01/Customer-Churn-Risk-Analysis"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="EEG Based Seizure Prediction System"
              description="A machine learning model designed to classify EEG signals and predict epileptic seizures for improved neurological care. The system extracts time-domain and frequency-based features from EEG data and applies models like Decision Tree and CNN, with the Decision Tree achieving 83% accuracy. It enables early seizure detection, offering a proactive approach to epilepsy management and enhancing patient quality of life."
              ghLink="https://github.com/SruthiGandla01/EEG-Based-Seizure-Prediction-System/tree/main"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
        <h2 className="project-heading" style={{ marginTop: "50px" }}>
  My <strong className="purple">Certifications</strong>
</h2>
<p style={{ color: "white" }}>
  These are a few certifications I have earned recently.
</p>
<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={require("../../Assets/Certifications/GoogleDataAnalytics.png")} // replace with your actual image
      title="Google Data Analytics"
      description="Completed Google's Data Analytics certificate covering data cleaning, visualization, and SQL using real-world case studies."
      ghLink="https://www.coursera.org/account/accomplishments/certificate/GYY9SGNC2VYN" // Replace with actual link
      isCertification={true}
    />
  </Col>


  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={require("../../Assets/Certifications/IBM.png")} // replace with your actual image
      title="IBM Data Science"
      description="Earned IBM’s Data Science Professional Certificate with hands-on projects in Python, SQL, machine learning, and data visualization."
      ghLink="https://coursera.org/share/ibm-data-link" // Replace with actual link
      isCertification={true}
    />
  </Col>


  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={require("../../Assets/Certifications/Tableau for DataScientists.png")} // replace with your actual image
      title="Tableau For Data Scientists"
      description="Completed a LinkedIn Learning course on using Tableau for data science workflows. Learned to build dynamic dashboards, transform data, and create impactful visualizations for better decision-making."
      ghLink="https://www.linkedin.com/learning/certificates/63fbeba5c523b84e20947fd2273e5d99dd9a96063d983e6a90c370896c1ce5a5?accountId=74653650&u=74653650&success=true&authUUID=Qif66DZjTHm%2FEAq4%2FoG2aA%3D%3D" // Replace with actual link
      isCertification={true}
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={require("../../Assets/Certifications/Learning Hadoop.png")} // replace with your actual image
      title="Learning Hadoop"
      description="Completed Learning Hadoop course covering the basics of distributed computing, HDFS, and the Hadoop ecosystem for scalable data processing."
      ghLink="https://www.linkedin.com/learning/certificates/c03d97c8a47a9ae1f24cdc2d58503e541ee6d75fb49259985571b0ffecc34fb3?u=74653650" // Replace with actual link
      isCertification={true}
    />
  </Col>


  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={require("../../Assets/Certifications/Introduction to Java.png")} // replace with your actual image
      title="Introduction to Java"
      description="Completed Coding Ninjas’ course covering Java fundamentals, object-oriented programming, and core concepts like loops, arrays, and classes for building basic applications."
      ghLink="https://certificate.codingninjas.com/view/bda50213e4f8cc27" // Replace with actual link
      isCertification={true}
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
