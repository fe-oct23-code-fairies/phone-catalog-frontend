import { ColorsAndGbVariants } from '../../components/ColorsAndGB';
import { PhotoBlock } from '../../components/photoBlock';
// import { MainSlider } from '../components/MainSlider/MainSlider';
import { Sections } from '../../components/sectionsForCartItemPage';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="photo-and-sections">
        <div className="photos-and-additional-info">
          <PhotoBlock />
          <ColorsAndGbVariants />
        </div>
        <Sections />
      </div>
      {/* <MainSlider /> */}
    </div>
  );
};
