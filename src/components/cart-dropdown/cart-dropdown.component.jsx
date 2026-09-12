import {useContext} from 'react'; // this is used to import the useContext hook from react. It is used to access the cart state in the cart dropdown component.

import { CartContext } from '../../contexts/cart.context'; // this is used to import the cart context. It is used to access the cart state in the cart dropdown component.
import { useNavigate } from 'react-router-dom'; // this is used to import the useNavigate hook from react-router-dom. It is used to navigate to the checkout page when the user clicks on the checkout button in the cart dropdown component.


import './cart-dropdown.styles.scss'; // this is used to import the styles for the cart dropdown component. It is used to style the cart dropdown component.
import Button from '../button/button.component.jsx'; // this is used to import the button component. It is used to display the button in the cart dropdown component.

import CartItem from '../cart-item/cart-item.component.jsx'; // this is used to import the cart item component. It is used to display the cart items in the cart dropdown component.

const CartDropdown = () => {
    const { cartItems} = useContext(CartContext); // this is used to access the cart state in the cart dropdown component. It is used to get the cart items and total cost from the cart state.
    const navigate = useNavigate(); // this is used to access the navigate function from react-router-dom. It is used to navigate to the checkout page when the user clicks on the checkout button in the cart dropdown component.
    
    const goToCheckoutHandler = () => {
        navigate('/checkout'); // this is used to navigate to the checkout page when the user clicks on the checkout button in the cart dropdown component.
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            {/* <div className='total-cost'>
                <span>Total: ${totalCost.toFixed(2)}</span>
            </div> */}
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}   

export default CartDropdown;