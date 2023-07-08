import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from './cart.types';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
   
       if(existingCartItem) {
           return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
           {...cartItem, quantity: cartItem.quantity + 1 }
           : cartItem
           );
       }
       return [...cartItems, {...productToAdd, quantity: 1 }];
   };
   
   const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
       const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id
       );
   
    //    check if quantity is equal to 1, if it is remove that item from cart
       if(existingCartItem.quantity === 1) {
           return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
       }
   
    //    return back cart items with matching cart item with reduced quantity
       return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
           {...cartItem, quantity: cartItem.quantity - 1 }
           : cartItem
           );
   }
   
   const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
       
   

const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
   }

const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
   }

const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
   }

const setIsCartOpen = (bool) => {
       dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
   };
