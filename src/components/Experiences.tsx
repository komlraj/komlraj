"use client";

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
    year: "2024",
    title: "Senior Frontend Developer",
    company: "ZenAdmin",
    companyLink: "https://www.zenadmin.ai/",
    details: [
      {
        description:
          "Built and optimized scalable frontend components using React and TypeScript to enhance the user experience of AI-driven HR and IT automation tools.",
      },
      {
        description:
          "Integrated tracking systems, dynamic forms, and automated workflows with Slack and HubSpot to streamline business operations and improve team collaboration.",
      },
      {
        description:
          "Improved application performance using best practices, state management with Zustand, and form validation with Zod, making the platform more efficient and maintainable.",
      },
    ],
  },
  {
    year: "2022",
    title: "Senior Software Engineer - Frontend",
    company: "Virtual Internships",
    companyLink: "https://www.virtualinternships.com/",
    details: [
      {
        description:
          "Led efforts to boost frontend performance using design patterns and caching techniques, earning top performance reviews for optimizing web application speed and efficiency.",
      },
      {
        description:
          "Applied advanced design principles and caching strategies to enhance the frontend experience, achieving an 'Excellent' rating in performance evaluations.",
      },
      {
        description:
          "Served as the frontend team lead, guiding optimization efforts and ensuring the platform ran smoothly with improved efficiency and responsiveness.",
      },
    ],
  },
  {
    year: "2020",
    title: "Software Engineer",
    company: "Khelomore",
    companyLink: "https://www.khelomore.com/",
    details: [
      {
        description:
          "Led performance improvements for the frontend by implementing design patterns and caching, resulting in a more responsive and efficient web application.",
      },
      {
        description:
          "Worked closely with the marketing team to enhance user engagement and ensure a seamless online experience.",
      },
      {
        description:
          "Designed and built user-friendly interfaces using industry best practices and modern frontend tools.",
      },
      {
        description:
          "Developed new features and optimized existing ones to improve the website's functionality and user experience.",
      },
    ],
  },
  {
    year: "2019",
    title: "Fullstack Engineer",
    company: "Citymall",
    companyLink: "https://www.citymall.com/",
    details: [
      {
        description:
          "Designed and developed an e-commerce platform from scratch, building multiple key modules and refining existing functionalities for a seamless shopping experience.",
      },
      {
        description:
          "Created a product-centric website with a focus on performance optimization, improving the overall online shopping experience.",
      },
    ],
  },
  {
    year: "2019",
    title: "Fullstack Engineer Intern",
    company: "Drishti",
    companyLink:
      "https://www.linkedin.com/company/drishti-technologies/?originalSubdomain=in",
    details: [
      {
        description:
          "Worked on an AI-powered platform that monitored manufacturing processes, contributing to both frontend and backend development using JavaScript.",
      },
    ],
  },
];

const Experiences = () => {
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
      start: "top top",
      endTrigger: container,
      end: "bottom bottom",
      pin: leftPanel,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.floor(progress * experienceSections.length);
        setActiveIndex(Math.min(newIndex, experienceSections.length - 1));
      },
      // markers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
                className={`year-marker ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="year-content">
                  <span>{section.year}</span>
                  <h4>{section.title}</h4>
                  <h5>
                    <a
                      href={section.companyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
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
              className={`experience-details ${
                activeIndex === index ? "active" : ""
              }`}
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

export default Experiences;
