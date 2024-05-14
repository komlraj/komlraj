import { seoIcon } from "../images/seoIcon";
import { web3Icon } from "../images/web3Icon";
import HtmlIcon from "../images/html-icon.png";
import CssIcon from "../images/css-icon.png";
import JsIcon from "../images/js-icon.png";
import GraphQl from "../images/graphql.svg";
import TsIcon from "../images/typescript.svg";
import ReactIcon from "../images/react-icon.png";
import NodeIcon from "../images/node-js.svg";
import VueIcon from "../images/vue-js.svg";

const Skills = () => {
  return (
    <section className="skill-section">
      <div className="skills">
        <div className="section-title">Skills</div>
        <div className="skill-card-wrapper">
          <div className="skill-card">
            <img src={HtmlIcon} alt="html-icon" />
            HTML
          </div>
          <div className="skill-card">
            <img src={CssIcon} alt="css-icon" />
            CSS
          </div>
          <div className="skill-card">
            <img src={JsIcon} alt="js-icon" />
            Javascript
          </div>
          <div className="skill-card">
            <img src={GraphQl} alt="graphql-icon" />
            GraphQL
          </div>
          <div className="skill-card">
            <img src={TsIcon} alt="ts-icon" />
            Typescript
          </div>

          <div className="skill-card">
            <img src={ReactIcon} alt="react-icon" />
            ReactJs
          </div>
          <div className="skill-card">
            <img src={NodeIcon} alt="ts-icon" />
            NodeJs
          </div>
          <div className="skill-card">
            <img src={VueIcon} alt="ts-icon" />
            VueJs
          </div>
        </div>
      </div>

      <div className="exploring-skills">
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
            {web3Icon()}
            Web3
          </div>
          <div className="ex-skill-card">
            {seoIcon()}
            SEO
          </div>
          <div className="ex-skill-card">
            <span>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                <path d="M15 12v-3"></path>
              </svg>
            </span>
            Next.js
          </div>
          <div className="ex-skill-card">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
                stroke-width="0"
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
