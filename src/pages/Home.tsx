// import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { PhonesSection } from '../components/PhonesSection/PhoneSection';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Home: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      { /* <PhotoBlock /> */}
      <MainSlider />
      <PhonesSection prefixSlider="models" title="Brand new model" />
      <PhonesSection prefixSlider="hot" title="Hot prices" />
    </>
  );
};
