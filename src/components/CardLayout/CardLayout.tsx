import React from 'react';
import './CardLayout.scss'


export const CardLayout: React.FC = () => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src="future photo here"
          alt="Iphone IMG"
        />
      </div>

      <h2 className="card__title">
        APPLE IPHONE 15 (MNED2UA/A) (MNED2UA/A)
      </h2>

      <div className='card__price'>$999</div>

      <div className='card__line'></div>

      <div className='card__additional'>
        <div className='card__additional__screen'>
          <p className='card__additional__screen-title'>Screen</p>
          <p className='card__additional__screen-value'>6.5” OLED</p>
        </div>

        <div className='card__additional__capacity'>
          <p className='card__additional__capacity-title'>Capacity</p>
          <p className='card__additional__capacity-value'>64 GB</p>
        </div>

        <div className='card__additional__ram'>
          <p className='card__additional__ram-title'>RAM</p>
          <p className='card__additional__ram-value'>4 GB</p>
        </div>
      </div>

      <div className='card__buttons'>
        <button className="card__buttons-add">Add to cart</button>
        <button className='card__buttons-icon'>
          <img src="" alt="i" />
        </button>
      </div>
    </div>
  );
}
