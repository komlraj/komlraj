'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from "./common/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const imageSection = imageRef.current;

    gsap.fromTo(
      aboutSection,
      {
        x: '-2%',
        opacity: 0,
      },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top center+=20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-me-section d-f">
      <div ref={aboutRef} className="about-text-section">
        <p className="about-me-title">About Me</p>
        <div className="about-me-text">
          <AnimatedText
            text={[
              "Hello! I'm a girl with a passion for coding and creating amazing websites. As a Senior Software Engineer, I specialize in Next.js, React.js, TypeScript, and JavaScript. My skills go beyond the basics – I'm the one you call when you need web optimization, error handling, and intricate logic to make your website lightning-fast. Leveraging the power of AI tools, I'm dedicated to crafting seamless user experiences and ensuring that websites run smoothly.",
              "When I'm not coding, you can find me exploring new technologies and enjoying a good cup of coffee. Let's make the web a better place together!",
            ]}
          />
        </div>
      </div>
      <div ref={imageRef} className="about-image-container">
        <div className="about-image"></div>
      </div>
    </div>
  );
}
