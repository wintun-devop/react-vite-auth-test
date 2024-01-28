// Global imports
import  {
    createContext,
    // useReducer,
    // useCallback,
    // useEffect,
  } from "react";
// import { useNavigate } from "react-router-dom";

export interface SimpleContextProps {
  text:string
  setText:() => void
  }


export const SimpleContext = createContext<SimpleContextProps>({});

