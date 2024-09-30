export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

// The above example is destructuring the children prop from the parent component
// This variations pulls all the PROPS from the parent component
function TabButtonVariation(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
