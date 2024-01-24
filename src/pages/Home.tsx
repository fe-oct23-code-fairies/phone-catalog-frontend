// import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { PhonesSection } from '../components/PhonesSection/Phones';

export const Home: React.FC = () => {
  return (
    <>
      { /* <PhotoBlock /> */}
      <MainSlider />
      <PhonesSection prefixSlider="models" title="Brand new model" />
      <PhonesSection prefixSlider="hot" title="Hot prices" />
    </>
  );
};
