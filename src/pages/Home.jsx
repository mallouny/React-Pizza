import React from 'react';
import {Categories, SortPopUp} from '../components';


function Home() {
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
          onClickItem={(name)=> console.log(name)}
          items ={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} 
          />
          <SortPopUp 
          items ={['Популярности','Цене','Алфавиту']}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/8CIgcf77NzAQfLmhNisp2DyHVqvGiZ93.png"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Четыре сыра</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li> 
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/s6hIUODZI3nt5QNAyo4C3BMLO1j7OYAU.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Пепперони</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products_for_catalog/BbpYIxuP2kBimwuFA797QHyEUWLYHZ4q.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Карбонара</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/m8puwKrKKboEnfjOt3OEFvuZWwgdHsQW.png"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Маргарита</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/zXPTrRvb1XINm6kK5IQl7B2zp137dtT3.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Мексиканская</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/ZqvvCdpHwv8yDkBSa7SQ4SecCwSieyHp.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Верона</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/X1Uru88hBV45mHLAAtNkarXTLPxxx9l1.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Мясное ассорти</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://images.pizza33.ua/products/menu/ppCqXTqnyX3SyqnXULwxcXhLwPpjO5kX.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Барбекю</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">от 395 ₽</div>
  <div className="button button--outline button--add">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i>2</i>
  </div>
</div>
</div> 
        </div>
      </div>
    )
}

export default Home
