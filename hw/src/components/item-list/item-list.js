import React from "react";

import "./item-list.css";

const ItemList = ({ data, onSelectedItem, children }) => {
  const listName = data.map((item) => {
    return (
      <li
        className="list-group-item"
        key={item.id}
        onClick={() => onSelectedItem(item.id)}
      >
        {children(item)}
      </li>
    );
  });

  return <ul className="item-list list-group">{listName}</ul>;
};

export default ItemList;
