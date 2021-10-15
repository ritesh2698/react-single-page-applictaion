import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="container1" id="blog">
            <h1 className="text-center" style={{color:"#4f565e"}}>Our Products</h1>
            <div className="blog-container">
                <h3>Paver And Concrete Mixer Machine</h3>
                <p>
                    Established as a <strong>Proprietor</strong> firm in the year{" "}
                    <strong>2017</strong>, we <strong>“R N Industries”</strong> are a
                    leading <strong>Manufacturer</strong> of a wide range of{" "}
                    <strong>
                        Paver Machine, Conveyor Pulley, Concrete Mixer Machine, Block Making
                        Machine, Wet Mix Paver Finisher, Mobile Concrete Batching Plant, etc
                    </strong>
                    .
                </p>
            </div>
            <div className="blog-paver">
                <h3>Paver Machine</h3>
                <p>
                    Providing you the best range of Road Paver Finisher, Concrete Vibrator
                    Paving Machine, Concrete Road Paving Machine and Roller Screed Paver
                    Machine with effective & timely delivery.
                </p>
                </div>
                <div className="paver-card">
                    <Card src="../image/img4.jpg"/>
                    <Card src="../image/img5.jpg"/>
                    <Card src="../image/img6.jpg"/>

                  
            </div>
            <hr/>
            <div className="blog-paver">
                <h3>Canal Paver Machine</h3>
                <p>
                    Prominent & Leading Manufacturer from Ahmedabad, we offer Canal Bed
                    Paver, Canal Lining Paver, Canal Paver Machine, Concrete Canal Paver
                    Machine and Canal Concrete Paver Machine.
                </p>
                
            </div>
            <div className="canal-card">
            <Card src="../image/img7.png"/>
                    <Card src="../image/img8.jpg"/>
                    <Card src="../image/img9.jpg"/>

            </div>
        </div>
    );
};

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card" style={{ width: "19rem" }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
