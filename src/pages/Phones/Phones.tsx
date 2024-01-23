import { CardLayout } from '../../components/CardLayout';

export const Phones: React.FC = () => {
  return (
    <>
      <h1 className="phones__title">Mobile phones</h1>

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
    </>
  );
};
