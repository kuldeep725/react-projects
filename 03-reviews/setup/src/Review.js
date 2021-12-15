import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, job, text } = people[index];

  const nextPerson = () => {
    let newIndex = (index + 1) % people.length;
    setIndex(newIndex);
  };

  const prevPerson = () => {
    let newIndex = (index - 1 + people.length) % people.length;
    setIndex(newIndex);
  };

  const randPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) newIndex = (index + 1) % people.length;
    console.log(newIndex);
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
