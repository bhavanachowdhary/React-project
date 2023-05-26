import { MouseEvent } from "react";

function Menu() {
  let items = ["Home", "About", "Services", "Contact"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {items.length === 0 && <p>No Items is found in the menu</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
