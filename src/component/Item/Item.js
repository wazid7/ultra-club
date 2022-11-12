import React from "react";
import "./Item.css";

const Item = (props) => {
  const { name, picture, time, info } = props.item;
  const { btn } = props;
  return (
    <div className="item">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>days of week : {info}</p>
      <p>Time : {time}</p>
      <button onClick={() => btn(props.item.time)}>Add to List</button>
    </div>
  );
};

export default Item;
