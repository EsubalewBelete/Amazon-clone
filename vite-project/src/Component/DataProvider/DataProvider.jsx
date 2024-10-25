import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={ [state, dispatch] }>
      {children}
    </DataContext.Provider>
  );
};
