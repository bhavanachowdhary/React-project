import { useState } from "react";
function FavColor() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>My Fav Color is {color}</h1>
      <button onClick={() => setColor("Green")}> Green</button>
      <button onClick={() => setColor("Yellow")}>Yellow</button>
    </div>
  );
}
export default FavColor;
