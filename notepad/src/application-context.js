import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

export function ApplicationContextProvider({ children }) {
  useEffect(() => {
    async function getMemos() {
      const response = await fetch('http://localhost:8000/memos')
      setMemos(response.ok ? await response.json() : [])
    }
    getMemos()
  }, [])

  const [memos, setMemos] = useState([]);
  const [memo, setMemo] = useState(null);

  const value = {
    memos,
    setMemos,
    memo,
    setMemo
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
