import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext({
  transactions: [],
  setStorageTransactions: () => {}
});

export default function DataProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getStorageItens() {
      const storageItens = await new Promise((resolve) => {
        const _transactions = localStorage.getItem("Data:transactions");

        resolve({ transactions: _transactions });
      });

      const storageTransactions = storageItens?.transactions;

      if (storageTransactions) {
        setTransactions(JSON.parse(storageTransactions));
      }
    }
    getStorageItens();
  }, []);

  const setStorageTransactions = (data) => {
    localStorage.setItem("Data:transactions", JSON.stringify(data));
    setTransactions(data);
  };

  return (
    <DataContext.Provider
      value={{ transactions, setStorageTransactions }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  return context;
}
