import React, { createContext, useState } from 'react';

const IdContext = createContext();

const IdProvider = ({ children }) => {
  const [id, setId] = useState(0);

  const setContextId = (newId) => {
    setId(newId);
  };

  return (
    <IdContext.Provider value={{ id, setContextId }}>
      {children}
    </IdContext.Provider>
  );
};

export { IdContext, IdProvider };
