import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <div>
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        </header>

      </div>

      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
