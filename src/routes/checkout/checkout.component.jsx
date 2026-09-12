import { useContext } from 'react'; // this is used to import the useContext hook from react. It is used to access the cart state in the checkout component.
import './checkout.styles.scss'; // this is used to import the styles for the checkout component. It is used to style the checkout component.
import { CartContext } from '../../contexts/cart.context'; // this is used to import the cart context. It is used to access the cart state in the checkout component.
import CartItem from '../../components/cart-item/cart-item.component.jsx'; // this is used to import the cart item component. It is used to display the cart items in the checkout component.
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'; // this is used to import the checkout item component. It is used to display the cart items in the checkout component.



const Checkout = () => {
  const { cartItems, cartTotal,} = useContext(CartContext); // this is used to access the cart state in the checkout component. It is used to get the cart items from the cart state.
    // const {name, price, imageUrl} = product;
    // const {addItemToCart} = useContext(CartContext);




  return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <span className='total'>Total: ${cartTotal}</span>
            {/* </div>
             <div className='total-cost'>
                <span>Total: ${totalCost.toFixed(2)}</span>
            </div> */}
            
    </div>
                
  )
}   




export default Checkout;