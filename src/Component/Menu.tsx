import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
}

function Menu(props: Props) {
  const [active, setActive] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {props.items.length === 0 && <p>No Items is found in the menu</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${index === active && "active"}`}
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
