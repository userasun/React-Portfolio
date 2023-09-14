import "./Heading.css";

/**
 * Props we'll need:
 *  - id
 *  - children <- a special prop
 */

export function Heading({ id, children }) {
  return (
    <h2 id={id}>
      <span>{children}</span>
    </h2>
  );
}
