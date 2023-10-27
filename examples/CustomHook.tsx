import React, { useEffect, useState } from 'react';

function useWhatever() {
  const [state, setState] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setState('Hello World');
    }, 2000);
  }, []);

  return state;
}

const MyComponent: React.FC = () => {
  const state = useWhatever();
  return <div>{state}</div>;
};
