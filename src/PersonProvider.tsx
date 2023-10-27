import Person from './Person';
import React, { createContext, useContext, useState } from 'react';

type PersonContextType = [
  Person[],
  React.Dispatch<React.SetStateAction<Person[]>>
];

const PersonContext = createContext<PersonContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const PersonProvider: React.FC<Props> = ({ children }) => {
  const personState = useState<Person[]>([]);

  return (
    <PersonContext.Provider value={personState}>
      {children}
    </PersonContext.Provider>
  );
};

function usePersonContext(): PersonContextType {
  const context = useContext(PersonContext);
  if (context === null) {
    throw new Error(
      'Use the usePersonContext hook function within a PersonProvider'
    );
  }
  return context;
}

export { PersonProvider, usePersonContext };
