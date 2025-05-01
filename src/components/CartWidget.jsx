import { Label } from 'semantic-ui-react';
import { RiShoppingCart2Line } from 'react-icons/ri';

const CartWidget = () => {
  return (
    <>
    <RiShoppingCart2Line style={{ fontSize: '2.2rem', cursor:"pointer"}} color="#e3a622"/>
    <Label color='white' floating circular style={{userSelect:"none"}}>
        3
      </Label>
    </>
  );
};

export default CartWidget;
