import { createContext, useReducer } from "react"
import darkmodeReducer from "./darkmodeReducer";

const initialState = {
  darkMode: false
}

export const DarkModeContext = createContext(initialState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkmodeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )

}