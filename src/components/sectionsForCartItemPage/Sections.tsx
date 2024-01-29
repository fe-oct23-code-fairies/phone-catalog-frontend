import React from 'react';
import './sections.scss';
import { Item } from '../../types/Item';

type Props = {
  phone: Item
};

export const Sections: React.FC<Props> = ({ phone }) => {
  return (
    <div className="grid-section-container">
      <section className="about">
        <h3 className="section__title">About</h3>
        <div className="underline" />

        {phone.description.map((description) => {
          return (
            <>
              <h4 className="section__title-name">{description.title}</h4>
              <p className="section__title-name-description">
                {description.text}
              </p>
            </>
          );
        })}
      </section>

      <section className="Tech-specs">
        <h3 className="section__title">Tech specs</h3>
        <div className="underline" />

        <div className="specifics">
          <div className="specifics__item">
            <div className="specifics__item-title">Screen</div>
            <div className="specifics__item-value">{phone.screen}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Resolution</div>
            <div className="specifics__item-value">{phone.resolution}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Processor</div>
            <div className="specifics__item-value">{phone.processor}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">RAM</div>
            <div className="specifics__item-value">{phone.ram}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Built in memory</div>
            <div className="specifics__item-value">{phone.capacity}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Camera</div>
            <div className="specifics__item-value">
              {phone.camera}
            </div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Zoom</div>
            <div className="specifics__item-value">{phone.zoom}</div>
          </div>

          <div className="specifics__item">
            <div className="specifics__item-title">Cell</div>
            <div className="specifics__item-value">{phone.cell}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
