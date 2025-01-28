'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceSection {
  year: string;
  title: string;
  company: string;
  companyLink: string;
  details: { title?: string; description: string }[];
}

const experienceSections: ExperienceSection[] = [
  {
    year: "2022",
    title: "Senior Software Engineer - Frontend",
    company: "Virtual Internships",
    companyLink: "https://www.virtualinternships.com/",
    details: [
      {
        title: "Optimized Web Solutions Inc.:",
        description: "Spearheaded front-end performance enhancement projects by employing design patterns and caching techniques. Achieved excellence in performance reviews for consistently improving web application efficiency. Led a team as a front-end project lead."
      },
      {
        title: "CodeCraft Technologies:",
        description: "Elevated front-end web application performance by applying design patterns and implementing caching strategies. Garnered an Excellent rating in performance evaluations for sustained optimization efforts. Served as a pivotal team leader for web front-end initiatives."
      },
      {
        title: "Efficiency Labs:",
        description: "Drove front-end web application optimization initiatives, leveraging design patterns and caching methodologies to enhance code efficiency. Received outstanding performance evaluations for consistently improving platform performance. Guided a team as a lead on web front-end projects."
      }
    ]
  },
  {
    year: "2020",
    title: "Software Engineer",
    company: "Khelomore",
    companyLink: "https://www.khelomore.com/",
    details: [
      {
        title: "Khelomore:",
        description: "Spearheaded front-end performance enhancement projects by employing design patterns and caching techniques. Achieved excellence in performance reviews for consistently improving web application efficiency. Led a team as a front-end project lead."
      },
      {
        title: "CodeCraft Technologies:",
        description: "Elevated front-end web application performance by applying design patterns and implementing caching strategies. Garnered an Excellent rating in performance evaluations for sustained optimization efforts. Served as a pivotal team leader for web front-end initiatives."
      },
      {
        title: "Efficiency Labs:",
        description: "Drove front-end web application optimization initiatives, leveraging design patterns and caching methodologies to enhance code efficiency. Received outstanding performance evaluations for consistently improving platform performance. Guided a team as a lead on web front-end projects."
      }
    ]
  },
  {
    year: "2019",
    title: "Fullstack Engineer",
    company: "Citymall",
    companyLink: "https://www.citymall.com/",
    details: [
      {
        title: "Citymall:",
        description: "Spearheaded front-end performance enhancement projects by employing design patterns and caching techniques. Achieved excellence in performance reviews for consistently improving web application efficiency. Led a team as a front-end project lead."
      },
      {
        title: "CodeCraft Technologies:",
        description: "Elevated front-end web application performance by applying design patterns and implementing caching strategies. Garnered an Excellent rating in performance evaluations for sustained optimization efforts. Served as a pivotal team leader for web front-end initiatives."
      },
    ]
  }
];

const ExperiencesAndEducation2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const leftPanel = leftPanelRef.current;
    if (!container || !leftPanel) return;

    // Create scroll trigger for the left panel
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      endTrigger: container,
      end: 'bottom bottom',
      pin: leftPanel,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.floor(progress * experienceSections.length);
        setActiveIndex(Math.min(newIndex, experienceSections.length - 1));
      },
      markers: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="experience-section">
      <div ref={containerRef} className="experience-container">
        <div ref={leftPanelRef} className="left-panel">
          <div className="section-title">
            <div className="title-with-line">
              <span>Experience</span>
              <div className="bottom-line">
                <span className="small-line"></span>
                <span className="big-line"></span>
              </div>
            </div>
          </div>
          <ul className="year-markers">
            {experienceSections.map((section, index) => (
              <li 
                key={index}
                className={`year-marker ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="year-content">
                  <span>{section.year}</span>
                  <h4>{section.title}</h4>
                  <h5>
                    <a href={section.companyLink} target="_blank" rel="noreferrer">
                      {section.company}
                    </a>
                  </h5>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          {experienceSections.map((section, index) => (
            <div
              key={index}
              className={`experience-details ${activeIndex === index ? 'active' : ''}`}
            >
              <ul>
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>
                    {detail.title && <strong>{detail.title}</strong>} 
                    {detail.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesAndEducation2;
