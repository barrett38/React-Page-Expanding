import genRandomInt from "./genRandomInt";
const reactImg = "src/assets/react-core-concepts.png";

export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
