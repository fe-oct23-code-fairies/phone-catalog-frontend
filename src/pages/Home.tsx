import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { SectionCategories } from '../components/Sections';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <h1 className="home__title">Welcome to Nice Gadgets store!</h1>
        <MainSlider />
      </div>
      <PhotoBlock />
      <SectionCategories />
    </div>
  );
};
