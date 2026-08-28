import { Fragment, useContext } from "react"; // this is used to wrap the navigation component and the outlet component so that we can return them both without adding an extra div to the DOM
import { Outlet, Link} from "react-router-dom"; // outlet is used to render the child routes of the navigation component. 
                                                //Link is used to create links to the different routes in the application. It is used instead of a regular anchor tag to prevent the page from refreshing when the user clicks on a link.
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'; // this is used to import the logo of the application. It is used to display the logo in the navigation component.
import './navigation.styles.scss'; // this is used to import the styles for the navigation component. It is used to style the navigation component.
import CrownSvg from '/src/assets/crown.svg?react'; // This import statement is different due to using VITE. Rere  to start instructions for link to how to import SVGs in VITE. 

import CartIcon from "../../components/cart-icon/cart-icon.component"; // this is used to import the cart icon component. It is used to display the cart icon in the navigation component.  
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"; // this is used to import the cart dropdown component. It is used to display the cart dropdown in the navigation component.

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context"; // this is used to import the cart context. It is used to access the cart state in the navigation component.

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext); // this is used to access the cart state in the navigation component. It is used to determine whether the cart dropdown should be displayed or not.

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     // setCurrentUser(null);
        
    // };

  return (
    <Fragment> {/*is used instead of a div to avoid adding an extra div to the DOM*/}
        <div className="navigation">
            <Link className="logo-container" to='/'> {/* this is the link to the home page of the application. It is used to navigate to the home page when the user clicks on the logo. */}
               <CrownSvg className="logo" /> {/* this is the logo of the application. It is used to display the logo in the navigation component. SVG should be used for logos */}
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
                currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>
                        SIGN OUT
                    </span>
                ): (
                    <Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet /> {/* this is what allows the child routes to be rendered inside the navigation component. It is a placeholder for the child routes to be rendered. */}
    </Fragment>

  );
}



export default Navigation;