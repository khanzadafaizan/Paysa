import React from "react";

export default function About() {
  return (
    <div className="row text-center text-md-start">
      <div className="col-md-12">
        <p className="newyork mt-5">SUMMARY</p>
        <div className="row">
          <div className="col-md-12">
            <h6 className="details px-2 px-md-0 py-2">
              A multi-talented product designer with experience in UX design,
              wireframing, prototyping and execution. Demonstrated ability to
              use empathy and science to back up product design decisions
              resulting in intuitive and simple digital experiences.{" "}
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <p className="newyork mt-5">EXPERIENCE</p>
        <div className="row">
          <div className="col-md-12">
            <h6 className="details px-2 px-md-0 py-2">
              Collaborated with cross-functional teams to design intuitive and
              visually appealing web and mobile applications. Conducted user
              research and created wireframes and prototypes resulting in a 30%
              increase in user engagement.
            </h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="newyork mt-4">SKILLS</p>
          <div className="row">
            <div className="col-md-12 ">
              <h6 className="py-2 details">Branding</h6>
              <h6 className="py-2 details">UI/UX</h6>
              <h6 className="py-2 details">Web-Design</h6>
              <h6 className="py-2 details">Print & Editorial</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
