import { useContext } from 'react';


import './cart-icon.styles.scss';
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import ShoppingIcon from '../../assets/shopping-bag.svg?react'; // This import statement is different due to using VITE. Rere  to start instructions for link to how to import SVGs in VITE. 

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;