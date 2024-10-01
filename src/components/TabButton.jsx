export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// NOTES and variations below

function TabButtonVarB({ children }) {
  function handleClick() {
    console.log("Hello World");
  }

  return (
    <li>
      {/* handleClick() can only be used by the creator */}
      {/* handleClick without () is used by React constantly in the background */}
      <button onClick={handleClick}>{children}</button>
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
