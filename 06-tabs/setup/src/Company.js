import React, { useState } from "react";

const Company = ({ company, active, index, setCompany }) => {
  return (
    <button
      onClick={() => setCompany(index)}
      className={`${active === index && "active-btn"} job-btn`}
    >
      {company}
    </button>
  );
};

export default Company;
