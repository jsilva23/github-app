import { createContext, ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  Search: (inputValue: string) => void;
  newInputValue: string;
  viewUsers: string;
  viewCompany: string;
  showUsers: () => void;
  showCompany: () => void;
  borderUser: string;
  borderCompany: string;
  initialScream: number;
  usersFound: number;
  companiesFound: number;
  sendUsersFound: (users: number) => void;
  sendcompaniesFound: (companies: number) => void;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, ...rest }: AppProviderProps) {
  const [newInputValue, setInputValue] = useState("");
  const [viewUsers, setViewUsers] = useState<string>("appearUsers");
  const [viewCompany, setViewCompany] = useState<string>("desappearCompany");
  const [borderUser, setBorderUser] = useState<string>("colorDark");
  const [borderCompany, setBorderCompany] = useState<string>("colorLight");

  const [initialScream, setInitialScream] = useState<number>(1);

  const [usersFound, setUsersFound] = useState<number>(0);
  const [companiesFound, setCompaniesFound] = useState<number>(0);

  function sendUsersFound(users: number) {
    setUsersFound(users);
  }

  function sendcompaniesFound(companies: number) {
    setCompaniesFound(companies);
  }

  const Search = (inputValue: string) => {
    if (inputValue) {
      setInitialScream(0);
    }
    setInputValue(inputValue);
  };

  function showUsers() {
    setViewUsers("appearUsers");
    setViewCompany("desappearCompany");
    setBorderUser("colorDark");
    setBorderCompany("colorLight");
  }

  function showCompany() {
    setViewUsers("desappearUsers");
    setViewCompany("appearCompany");
    setBorderUser("colorLight");
    setBorderCompany("colorDark");
  }

  return (
    <AppContext.Provider
      value={{
        Search,
        newInputValue,
        viewUsers,
        viewCompany,
        showUsers,
        showCompany,
        borderUser,
        borderCompany,
        initialScream,
        companiesFound,
        usersFound,
        sendcompaniesFound,
        sendUsersFound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
