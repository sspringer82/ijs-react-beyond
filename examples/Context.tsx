import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const MyContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  '',
  () => '',
]);
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
