import { useCartContext } from '../../context/CartContext';
import { Button } from '../../ui/Button';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { Icon } from '../../ui/Icons';

export const Popup = () => {
  const { setIsCheckoutSuccessful } = useCartContext();

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup__text-block">
          <p className="h3">Thanks!</p>
          <p className="text-body">your checkout is successful</p>
        </div>

        <ButtonWithIcon
          additionalClass="popup__close"
          onClick={() => setIsCheckoutSuccessful(false)}
        >
          <Icon iconName="close" />
        </ButtonWithIcon>

        <img
          src="images/popUp-image.png"
          alt=""
          className="popup__img"
        />

        <Button to="/" btnClass="popup__btn">
          Back to main page
        </Button>
      </div>
    </div>
  );
};
