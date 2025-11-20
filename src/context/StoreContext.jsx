import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
    };

    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };


    const value = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }


    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )

    
}

export default StoreContextProvider;