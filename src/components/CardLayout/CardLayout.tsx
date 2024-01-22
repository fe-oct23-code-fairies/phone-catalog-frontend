import React from 'react';
// import { HeartLikeIcon } from './icons/HeartLike.svg'
import './CardLayout.scss'


export const CardLayout: React.FC = () => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src="https://s3-alpha-sig.figma.com/img/4036/d779/98ea87fdcb4fe9b1d62dd9629b0b820f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IlCU9y~SuA~X91gWpr57EonoPK0URVHknCGJcKh3jXHpLH7qrHH8ZunoXeThhpcjsUNrV10xvA2ESfp7WYpKYjPAnxXn8Rowz47j2QvmKILkW8TZukA-247uHFUvaKLFQVY4YqqUe78YCEXlb8UMBmAj1Z7Tx7AeHMqxRAf6BbLceygOz6AqRXZvJDtEUuSED7Y6PnXKS3gZrH0KWIu4GBhRUKwWK~tUzaAxln~4LFUSRKsHvRi4yfI2JVk7lL-H8JVv1cnTTnJt8Zv~-5J28lDENQrrLGgufzO08in~LKYAiQIvUj1s-cYQKJvVzvqDsPImktwqheVswKPUIEa5XA__"
          alt="Iphone IMG"
        />
      </div>

      <h2 className="card__title">
        APPLE IPHONE 15 (MNED2UA/A)
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
