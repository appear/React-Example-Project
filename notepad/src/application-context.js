import React, { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function ApplicationContextProvider({ children }) {
  const [memos, setMemos] = useState([
    {
      id: Date.now(),
      title: "임시 메모 데이터",
      content: "임시 메모 데이터의 내용",
      createdAt: new Date()
    }
  ]);
  const [memo, setMemo] = useState({
    id: Date.now(),
    title: "임시 메모 데이터",
    content: "임시 메모 데이터의 내용",
    createdAt: new Date()
  });

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
