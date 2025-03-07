import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  
  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {readMore && <p>{info}</p>}
      {readMore && <button onClick={() => setReadMore(false)}>read less</button>}
      {!readMore && <p>{info.substring(0, 100)}</p>}
      {!readMore && <button onClick={() => setReadMore(true)}>read more</button>}
      <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
