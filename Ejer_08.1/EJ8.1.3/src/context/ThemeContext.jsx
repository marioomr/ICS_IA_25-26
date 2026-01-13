import { createContext, useReducer, useContext } from "react";
import { themeReducer } from "../reducer/themeReducer";

const ThemeContext = createContext();

const initialState = {
  primaryColor: "#6c5ce7",
  fontSize: 16,
  textTransform: "none"
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
