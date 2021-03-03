import { createContext, ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  Search: (inputValue: string) => void;
  newInputValue: string;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, ...rest }: AppProviderProps) {
  const [newInputValue, setInputValue] = useState("");

  const Search = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <AppContext.Provider value={{ Search, newInputValue }}>
      {children}
    </AppContext.Provider>
  );
}
