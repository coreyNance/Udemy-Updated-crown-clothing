import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // This is the component that allows us to use routing in our application. 
                                                  // It should wrap around the entire application to provide routing capabilities to all components.
import {UserProvider} from './contexts/user.context.jsx';
import { CategoriesProvider } from './contexts/categories.context.jsx'; // This is the context provider for the categories state. It should wrap around the entire application to provide categories state to all components.
import { CartProvider } from './contexts/cart.context.jsx'; // This is the context provider for the cart state. It should wrap around the entire application to provide cart state to all components.


// This is the main entry point of the application. It renders the App component inside the root element in the HTML file. 
// The App component is wrapped with BrowserRouter to enable routing throughout the application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
