import { PhotoBlock } from '../components/photoBlock';
import { MainSlider } from '../components/MainSlider/MainSlider';

export const Home: React.FC = () => {
  return (
    <>
      <h1 className="title">Home Page</h1>
      <PhotoBlock />
      <MainSlider />
    </>
  );
};
