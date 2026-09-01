import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context.jsx';

import './cart-icon.styles.scss';
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import ShoppingIcon from '../../assets/shopping-bag.svg?react'; // This import statement is different due to using VITE. Rere  to start instructions for link to how to import SVGs in VITE. 


const CartIcon = () => {

   
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;







// const totalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//  const { cartItems } = useContext(CartContext); // this is used to access the cart state in the cart dropdown component. It is used to get the cart items from the cart state.