import { MainSlider } from '../components/MainSlider/MainSlider';
import { SectionCategories } from '../components/Sections';
import { PhonesSection } from '../components/PhonesSection/PhoneSection';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <h1 className="home__title">Welcome to Nice Gadgets store!</h1>
        <MainSlider />
      </div>
      <PhonesSection prefixSlider="models" title="Brand new model" />
      <SectionCategories />
      <PhonesSection prefixSlider="hot" title="Hot prices" />
    </div>
  );
};
