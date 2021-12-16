import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const uniqCategories = [...new Set(items.map((o) => o.category))];
  const categories = ["all", ...uniqCategories];

  const changeCategory = (category) => {
    if (categories.includes(category)) setActiveCategory(category);
  };

  return (
    <main>
      <section className="menu container">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} changeCategory={changeCategory} />
        <div className="section-center">
          {items
            .filter(
              (item) =>
                activeCategory === "all" || item.category === activeCategory
            )
            .map((item) => (
              <Menu key={item.id} {...item} />
            ))}
        </div>
      </section>
    </main>
  );
}

export default App;
