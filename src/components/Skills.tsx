'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { web3Icon } from "../images/web3Icon";
import HtmlIcon from "../images/html-icon.png";
import CssIcon from "../images/css-icon.png";
import JsIcon from "../images/js-icon.png";
import GraphQl from "../images/graphql.svg";
import TsIcon from "../images/typescript.svg";
import ReactIcon from "../images/react-icon.png";
import NodeIcon from "../images/node-js.svg";
import NextIcon from "../images/nextjs-icon.svg";
import AiIcon from "../images/ai-icon.webp";
import PythonIcon from "../images/python.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Typescript", image: TsIcon, alt: "ts-icon" },
  { name: "Javascript", image: JsIcon, alt: "js-icon" },
  { name: "React", image: ReactIcon, alt: "react-icon" },
  { name: "Next", image: NextIcon, alt: "next-icon" },
  { name: "HTML", image: HtmlIcon, alt: "html-icon" },
  { name: "CSS", image: CssIcon, alt: "css-icon" },
  { name: "GraphQL", image: GraphQl, alt: "graphql-icon" },
  { name: "Node", image: NodeIcon, alt: "node-icon" },
];

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLDivElement>(null);
  const exploringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillCards = skillCardsRef.current?.children;
    const exploringSection = exploringRef.current;

    // Skill cards stagger animation
    if (skillCards) {
      gsap.fromTo(
        Array.from(skillCards),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillCardsRef.current,
            start: 'top center+=30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Exploring section animation
    gsap.fromTo(
      exploringSection,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: exploringSection,
          start: 'top center+=30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={skillsRef} className="skill-section">
      <div className="skills">
        <div className="section-title">Skills</div>
        <div ref={skillCardsRef} className="skill-card-wrapper">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <Image src={skill.image} alt={skill.alt} />
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div ref={exploringRef} className="exploring-skills">
        <div>
          <h3 className="exploring-text">Exploring</h3>
          <p className="exploring-desc">
            Right now, I'm learning new skills to add to my toolkit, starting
            with the basics in some areas.
            <br /> These efforts help me become better at what I do, ready to
            handle different tasks with ease. I'm excited to keep growing and
            learning in this ever-changing field.
          </p>
        </div>
        <div className="ex-skill-card-wrapper">
          <div className="ex-skill-card">
            <Image src={PythonIcon} alt="python-icon" />
            Python
          </div>
          <div className="ex-skill-card">
            <span>
              <Image src={AiIcon} alt="ai-icon" />
            </span>
            AI tools
          </div>
          <div className="ex-skill-card">
            {web3Icon()}
            Web3
          </div>

          <div className="ex-skill-card">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
              </svg>
            </span>
            Ethers.js
          </div>
          <div className="ex-skill-card">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z"></path>
              </svg>
            </span>
            Solidity
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
