import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type MyType = [string, Dispatch<SetStateAction<string>>];

const MyContext = createContext<MyType>(['', () => '']);
const App: React.FC = ({ children }: { children: React.ReactNode }) => {
  const state = useState('');

  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

const MyChild = () => {
  const [state, setState] = useContext(MyContext);
  return <div>{state}</div>;
};

{
  /* <App>
  <MyChild />
</App> */
}

function usePersonContext(): PersonContextType {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error(
      'Use the usePersonContext hook function within a PersonProvider'
    );
  }
  return context;
}
