import React from 'react';
import { Item } from '../../types/Item';
import './sections.scss';

type Props = {
  product: Item;
};

export const Sections: React.FC<Props> = ({ product }) => {
  const trimmedCell = product.cell.replaceAll(/["'{}]/ig, '');

  return (
    <div className="grid-section-container">
      <section className="about">
        <h3 className="section__title">About</h3>
        <div className="underline" />

        {product.description.map(description => {
          return (
            <div key={description.title}>
              <h4 className="section__title-name">{description.title}</h4>
              <p
                className="section__title-name-description"
              >
                {description.text}
              </p>
            </div>
          );
        })}
      </section>

      <section className="Tech-specs">
        <h3 className="section__title">Tech specs</h3>
        <div className="underline" />

        <div className="specifics">
          <div className="specifics__item">
            <div className="specifics__item-title">Screen</div>
            <div className="specifics__item-value">{product.screen}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Resolution</div>
            <div className="specifics__item-value">{product.resolution}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Processor</div>
            <div className="specifics__item-value">{product.processor}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">RAM</div>
            <div className="specifics__item-value">{product.ram}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Built in memory</div>
            <div className="specifics__item-value">{product.capacity}</div>
          </div>

          {product.camera && (
            <div className="specifics__item">
              <div className="specifics__item-title">Camera</div>
              <div className="specifics__item-value">{product.camera}</div>
            </div>
          )}

          {product.zoom && (
            <div className="specifics__item">
              <div className="specifics__item-title">Zoom</div>
              <div className="specifics__item-value">{product.zoom}</div>
            </div>
          )}

          <div className="specifics__item">
            <div className="specifics__item-title">Cell</div>
            <div className="specifics__item-value">{trimmedCell}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
