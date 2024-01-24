import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { SectionCategories } from '../components/Sections';

export const Home: React.FC = () => {
  return (
    <>
      <MainSlider />
      <PhotoBlock />
      <SectionCategories />
    </>
  );
};
