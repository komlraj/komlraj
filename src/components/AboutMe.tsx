import AnimatedText from "./common/AnimatedText";

export default function AboutMe() {
  return (
    <div className="about-me-section d-f">
      <div className="about-text-section">
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
      <div className="about-image-container">
        <div className="about-image"></div>
      </div>
    </div>
  );
}
