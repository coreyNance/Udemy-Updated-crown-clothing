import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context.jsx';


// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
// import ShoppingIconImage from '../../assets/shopping-bag.svg?react'; // This import statement is different due to using VITE. Rere  to start instructions for link to how to import SVGs in VITE. 
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';


const CartIcon = () => {

   
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;







// const totalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//  const { cartItems } = useContext(CartContext); // this is used to access the cart state in the cart dropdown component. It is used to get the cart items from the cart state.