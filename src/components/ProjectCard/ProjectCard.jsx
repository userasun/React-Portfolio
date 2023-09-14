import "./ProjectCard.css";

/**
 * Props we'll need:
 *  - title
 *  - description
 *  - imgSrc
 *    - default value: /assets/project_placeholder.svg
 */

export function ProjectCard({ title, description, imgSrc }) {
  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <p>{description}</p>
      <img alt={title} src={imgSrc} />
    </div>
  );
}
