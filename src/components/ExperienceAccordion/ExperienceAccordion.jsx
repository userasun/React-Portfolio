import { useState } from "react";
import "./ExperienceAccordion.css";

/**
 * Props we'll need:
 *  - title
 *  - content or ???
 *
 * The path for the arrow on the accordion:
 *  - /assets/caret.svg
 */

export function ExperienceAccordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`accordion ${expanded ? "expanded" : ""} `}>
      <h3>
        <button onClick={() => setExpanded(!expanded)}>
          <img alt="Arrow indicating collapsed" src="/assets/caret.svg" />
          {title}
        </button>
      </h3>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
