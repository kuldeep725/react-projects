import React from 'react';

const Categories = ({ categories, changeCategory }) => {
  return <div className='btn-container '>
  {
      categories.map(category => {
        return <button key={category} onClick={() => changeCategory(category)} className='filter-btn '>
          {category}
        </button>
      })
  }
  </div>
};

export default Categories;
