import { CardLayout } from "../../components/CardLayout";
import './phones.scss'

export const Phones: React.FC = () => {
  return (
    <div>
      <h1 className="title">Mobile phones</h1>

      <div className="grid__container">
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
        <div className="grid__container-item"><CardLayout /></div>
      </div>
    </div>
  );
};
