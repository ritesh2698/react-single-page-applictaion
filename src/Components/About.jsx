import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About" id="about">
      <h1 className="text-center" style={{ color: "#4f565e" }}>
        About Us
      </h1>
      <div className="about-main">
        <div className="about-img">
          <img src="../image/about.jpg" alt="" />
        </div>
        <div className="about-content">
          <h2>R N Industries</h2>
          <p>
            Established as a <strong>Proprietor</strong> firm in the year{" "}
            <strong>2017</strong>, we <strong>“R N Industries”</strong> are a
            leading <strong>Manufacturer</strong> of a wide range of{" "}
            <strong>
              Paver Machine, Conveyor Pulley, Concrete Mixer Machine, Block
              Making Machine, Wet Mix Paver Finisher, Mobile Concrete Batching
              Plant, etc
            </strong>
            . Situated in <strong>Ahmedabad (Gujarat, India)</strong>, we have
            constructed a wide and well functional infrastructural unit that
            plays an important role in the growth of our company. We offer these
            products at reasonable rates and deliver these within the promised
            time-frame. Under the headship of{" "}
            <strong>“Mr. Dinesh Prajapati” (Proprietor)</strong>, we have gained
            a huge clientele across the nation.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="why">
          <h3>Why Us</h3>
          <p>
            We are an eminent firm that is actively committed to offering
            premium quality range of products within the minimum time and at
            genuine rates. Few of the essential factors that help us to become
            the prime choice of the patrons are listed below:
          </p>
          <ul>
            <li>Qualitative products</li>
            <li>Client-centric approach</li>
            <li>Dexterous team of professionals</li>
            <li>Positive records</li>
            <li>Excellent transport & logistic facility</li>
            <li>Economical price range</li>
            <li>Prompt delivery</li>
          </ul>
        </div>
        <div className="why-img">
            <img src="../image/why.jpg" alt="" />
        </div>
        </div>
        
        <div className="quality-container">
        <div className="quality-img">
            <img src="../image/quality.jpg" alt="" />
        </div>
        <div className="quality">
          <h1>Quality Assurance</h1>
          <p>
            We emphasize on the superior quality of construction machines for
            the satisfaction of our clients. The awe-inspiring response of our
            clients across the national and international market has encouraged
            us to raise our standards of excellence. We follow an efficient and
            stringent quality control strategy to test our products, right from
            the stage of procuring raw materials to the final dispatch of
            manufactured products.
          </p>
        </div>
        
        </div>

        <div className="infra-container">
        <div className="infra">
          <h1>Our Infrastructure</h1>
          <p>
            With the aid of our state-of-the-art and pioneering infrastructural
            unit, we are able to provide a comprehensive array of products to
            our precious clients. In order to maintain systematic business
            operations, we have properly integrated our infrastructural unit
            into diverse departments. This infrastructure includes procurement,
            quality control, research and development, production, warehousing &
            packaging and sales & marketing.
          </p>
        </div>
        <div className="infra-img">
            <img src="../image/infrastructure.png" alt="" />
        </div>
        </div>
    </div>
  );
};

export default About;
