import { PhotoBlock } from '../components/photoBlock';
// import { MainSlider } from '../components/MainSlider/MainSlider';
import { Sections } from '../components/sectionsForCartItemPage';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="photo-and-sections">
        <PhotoBlock />
        <Sections />
      </div>
      {/* <MainSlider /> */}
    </div>
  );
};
