import './cart-dropdown.styles.scss'; // this is used to import the styles for the cart dropdown component. It is used to style the cart dropdown component.
import Button from '../button/button.component.jsx'; // this is used to import the button component. It is used to display the button in the cart dropdown component.

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}   

export default CartDropdown;