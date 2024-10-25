// src/Utility/reducer.js

import { Type } from "./action.type.js"; // Ensure correct file extension

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log("Reducer Action:", action); // Debugging log

  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // Validate action.payload
      if (!action.item || !action.item.id) {
        console.error("ADD_TO_BASKET action missing 'item' or 'item.id'");
        return state;
      }

      // Check if the item already exists in the basket
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        // Add new item with amount = 1
        console.log("Adding new item to basket:", action.item);
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        // Update the amount of the existing item
        console.log("Updating amount for item:", action.item.id);
        const updatedBasket = state.basket.map((item) => {
          if (item.id === action.item.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      }
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    case Type.SET_USER:
      return { ...state, user: action.user };

    default:
      console.error(`Unhandled action type: ${action.type}`);
      return state; // Return current state in default case
  }
};
