import React from 'react'

export default function Category({ category }) {
    return (
      <div className='text-center mt-10 text-white'>
        {category === "Главная" && <div>Главная контент</div>}
        {category === "Слайды" && <div>Слайды контент</div>}
        {category === "Категории" && <div>Категории контент</div>}
        {category === "Товары" && <div>Товары контент</div>}
      </div>
    );
  }
