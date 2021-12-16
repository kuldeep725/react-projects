import React from "react";

const Menu = ({ title, price, img, desc }) => {
  return (
    <div className="menu-item">
      <div>
        <img src={img} alt={title} className="photo"/>
      </div>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <p className="price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};
export default Menu;
