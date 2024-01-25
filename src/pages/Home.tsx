import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';
import { PhonesSection } from '../components/PhonesSection/PhoneSection';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="photo-and-sections">
        <PhotoBlock />
        <MainSlider />
      </div>
      
      <PhonesSection prefixSlider="models" title="Brand new model" />
      
      <PhonesSection prefixSlider="hot" title="Hot prices" />
    </div>
  );
};
