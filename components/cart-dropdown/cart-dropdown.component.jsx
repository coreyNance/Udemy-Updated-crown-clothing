import {useContext} from 'react'; // this is used to import the useContext hook from react. It is used to access the cart state in the cart dropdown component.

import { CartContext } from '../../contexts/cart.context'; // this is used to import the cart context. It is used to access the cart state in the cart dropdown component.



import './cart-dropdown.styles.scss'; // this is used to import the styles for the cart dropdown component. It is used to style the cart dropdown component.
import Button from '../button/button.component.jsx'; // this is used to import the button component. It is used to display the button in the cart dropdown component.

import CartItem from '../cart-item/cart-item.component.jsx'; // this is used to import the cart item component. It is used to display the cart items in the cart dropdown component.

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext); // this is used to access the cart state in the cart dropdown component. It is used to get the cart items from the cart state.

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}   

export default CartDropdown;