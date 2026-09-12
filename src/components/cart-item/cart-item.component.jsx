import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';


const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div>
                <button onClick={() => addItemToCart(cartItem)}>+</button>
                <button onClick={() => removeItemFromCart(cartItem)}>-</button>
            </div>
            

        </div>
    )
}

export default CartItem;