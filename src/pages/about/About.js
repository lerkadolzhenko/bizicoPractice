import React from "react";
import "./about.scss";

let About = () => {
  return (
    <div>
      <div className="container py-3 team-sektion">
        <h1 align="center">About Us</h1>
        <div className="row">
          <div className="col-md-4 team-box">
            <div>
              <img
                alt="photoTeam"
                className="team-img thumbnail"
                src="https://i.pinimg.com/originals/fa/64/1f/fa641f5040a48392db1a13e031641f9c.png"
              />
              <div className="team-content">
                <h3>Philip Freeman</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                  viverra ante luctus vel. Donec vel mauris quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 team-box">
            <div>
              <img
                alt="photoTeam"
                className="team-img thumbnail"
                src="https://data.whicdn.com/images/264535797/original.jpg"
              />
              <div className="team-content">
                <h3>David Smith</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                  viverra ante luctus vel. Donec vel mauris quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 team-box">
            <div>
              <img
                alt="photoTeam"
                className="team-img thumbnail"
                src="https://i.pinimg.com/originals/28/eb/d9/28ebd946c4b6cf0cf3144a1a1fb98a66.jpg"
              />
              <div className="team-content">
                <h3>Robert D'costa</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                  viverra ante luctus vel. Donec vel mauris quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-sektion cta-padding35">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-9 col-xs-12">
              <h3>
                <span className="glyphicon glyphicon-cog "></span>{" "}
                <b>Homes for sale?</b> Explore properties like a pro.
              </h3>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12 Tpadding10">
              <button type="button" className="btn btn-primary site-btn">
                Start Right Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
