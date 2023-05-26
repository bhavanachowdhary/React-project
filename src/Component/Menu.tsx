import { MouseEvent, useState } from "react";

function Menu() {
  let items = ["Home", "About", "Services", "Contact"];
  const [active, setActive] = useState(0);
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {items.length === 0 && <p>No Items is found in the menu</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${index === active && "active"}`}
            key={item}
            onClick={() => setActive(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
