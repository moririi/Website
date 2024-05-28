import { useState } from "react";

export default function ListGroup() {
  let items = [
    "Nigga",
    "Faggot",
    "Cb",
    "Fat nigga",
    "Gay nigga",
    "Alex niggas",
  ];

  let selectedIndex = 0;
  const arr = useState(-1);
  arr[0];
  arr[1];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No niggas found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              selectedIndex: index;
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
