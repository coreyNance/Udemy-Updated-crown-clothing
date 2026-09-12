import {Routes, Route} from 'react-router-dom'; // this is used to create the routes for the application and to define the different paths for the application

import Navigation from './routes/navigation/navigation.component'; // this is the navigation component that will be rendered on all pages of the application
import Home from "./routes/home/home.component"; // this is the home component that will be rendered when the user navigates to the home page of the application
import Authentication from './routes/authentication/authentication.component'; // this is the sign-in component that will be rendered when the user navigates to the sign-in page of the application
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Navigation />}> {/* this is the route for the navigation component that will be rendered on all pages of the application */}
        <Route index element={<Home />} /> {/* index is what allows the Home component to be rendered when the user is on the root path '/' */}
        <Route path='shop' element={<Shop />} />  {/* this is the route for the shop component */}
        <Route path='auth' element={<Authentication />} />  {/* this is the route for the authentication component */}
        <Route path='checkout' element={<Checkout />} />  {/* this is the route for the checkout component */}
    </Route>
    </Routes>
  )
};

export default App
