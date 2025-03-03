"use client";
import { createContext } from "react";
import { ChildProps, AccountProps, ContextType } from "@/types";
import { useState, useContext } from "react";

export const Context = createContext<ContextType | null>(null);
const GlobalContext = ({ children }: ChildProps) => {
  const [account, setAccount] = useState<AccountProps | null>(null);
  return (
    <Context.Provider value={{ account, setAccount }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
