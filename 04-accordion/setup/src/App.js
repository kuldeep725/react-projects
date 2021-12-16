import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <div>
          <h3>questions and answers about login</h3>
        </div>
        <div>
          {data.map((question) => (
            <Question {...question} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
