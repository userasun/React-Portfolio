import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceAccordion } from "../components/ExperienceAccordion";
import "./App.css";

/**
 * This file is going to act as our main component for content.
 * We'll leverage other components to help flesh out our app.
 */

export function App() {
  return (
    <>
      <Appbar />
      <main id="Home">
        <section id="landing">
          <h1 className="headline">
            My name is <span>A'Brea</span>, and I build apps to improve the
            lives of others.
          </h1>
          <img
            alt="Software engineer illustration"
            src="/assets/software_engineer.svg"
            width="90%"
          />
          <article className="about-me">
            <Heading id="Home">About Me</Heading>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper diam in leo iaculis commodo. Sed mattis dapibus facilisis.
              Donec eu odio nec urna porta porta. Nulla vel velit in odio
              convallis mattis sit amet nec lacus.
            </p>
          </article>
        </section>
        <section className="projects-section">
          <div className="blue-box" aria-hidden="true" />
          <Heading id="Projects">Projects</Heading>
          <div className="project-cards">
            <ProjectCard
              title="Project 1"
              description="A brief description of project 1"
              imgSrc="/assets/project_placeholder.svg"
            />
            <ProjectCard
              title="Project 2"
              description="A brief description of project 2"
              imgSrc="/assets/project_placeholder.svg"
            />
            <ProjectCard
              title="Project 3"
              description="A brief description of project 3"
              imgSrc="/assets/project_placeholder.svg"
            />
          </div>
        </section>
        <section>
          <Heading id="Experience">Experience</Heading>
          <div className="experience-accordions">
            <ExperienceAccordion title="Web Development Course">
              Undergrad 3000 level course learning HTML, CSS and JavaScript
            </ExperienceAccordion>
            <ExperienceAccordion title="Rapid Prototyping Course">
              Undergrad 4000 level course to expand and demonstrate knowledge of
              low, medium and high fidelity prototypes through assignments and
              projects
            </ExperienceAccordion>
            <ExperienceAccordion title="React Workshop">
              Workshop attended provided by the Girls Who Code organization to
              learn the basics of React
            </ExperienceAccordion>
          </div>
        </section>
      </main>
    </>
  );
}
