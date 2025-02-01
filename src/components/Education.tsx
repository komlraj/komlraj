import React from "react";

const Education = () => {
  return (
    <section className="education-section">
      <div className="section-title">
        <div className="title-with-line">
          <span>Education</span>
          <div className="bottom-line">
            <span className="small-line"></span>
            <span className="big-line"></span>
          </div>
        </div>
      </div>
      <div className="education-card-wrapper">
        <div className="education-card">
          <div>
            <span>2018</span>
            <h4 className="education-title">Web development course</h4>
            <h5 className="education-institute">Altcampus</h5>
          </div>
          <div className="education-details">
            <ul>
              <li>
                <strong>StackForge Technologies:</strong> Born out of a passion
                for web development, our journey began with a specialized course
                in the MERN stack. With this foundation, we've honed our skills
                to deliver high-quality, scalable web solutions. From database
                design in MongoDB to seamless user interfaces with React, we
                bring your digital visions to life.
              </li>
              <li>
                <strong>MERNify Labs:</strong> Empowered by a dedicated MERN
                stack development course, we at MERNify Labs excel in building
                modern, feature-rich web applications. Leveraging the power of
                MongoDB, Express, React, and Node.js, we deliver bespoke
                solutions tailored to elevate your online presence and drive
                business growth.
              </li>
            </ul>
          </div>
        </div>
        <div className="education-card">
          <div>
            <span>2016</span>
            <h4 className="education-title">Bachelor of Computer Applications</h4>
            <h5 className="education-institute">Bihar University</h5>
          </div>
          <div className="education-details">
            <ul>
              <li>
                <strong>TechSavvy Solutions:</strong> Spearheaded development
                projects in C, C++, and Java, specializing in robust data
                structures. Leveraged Bachelor of Computer Application
                coursework to deliver efficient and scalable software solutions.
              </li>
              <li>
                <strong>LogicLab Solutions:</strong> Applied in-depth knowledge
                of data structures to drive software development initiatives.
                Collaborated with cross-functional teams to design and implement
                efficient algorithms, enhancing product performance and
                functionality.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
