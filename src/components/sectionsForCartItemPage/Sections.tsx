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

        <h4 className="section__title-name">{}</h4>
        <p className="section__title-name-description">
          Lorem ipingemom dolore quibusdam vitae corrupti
          ipsam porro aniincidunt quibusdam ea.
        </p>

        <h4 className="section__title-name">Camera</h4>
        <p className="section__title-name-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, labore
          dicta.Recusandae praesentium mollitia minus ipsa vitae, adipisci nam
          expedita nat
          us aliquid perspiciatis, dignissimos, repudiandae commodi veniam
          harum saepe excepturi! A mollitia ab fugiat deserunt illo earum dign
          issimos ap
          eriam, quis maiores odio voluptas
          repellat inventore, corporis quidem placeat sit alias!
        </p>

        <h4 className="section__title-name">
          Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. L
          ove it.
        </h4>
        <p className="section__title-name-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, labo
          re dicta. Recusandae praesentium mollitia minus ipsa vitae, adipi
          nam expedita natus aliquid iciatis, dignissimos, repudiandae commod
          veniam harum saepe excepturi! A mollitia ab fugiat deserunt illo earum
          dignissimos aperiam, quis maiores odio voluptas repellat inventore, co
          rporis quidem placeat sit alias!
        </p>
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
