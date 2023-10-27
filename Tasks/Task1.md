# Task 1 - Context

Create a context for managing person data.

1. Create a file named `PersonProvider.tsx`
2. Define the context type (based on React's state structure)
3. Create the `PersonContext` using the `createContext` function
4. Create the `PersonProvider` component that returns the `PersonContext.Provider` and provides it with a `value`
5. Integrate the `PersonProvider` into the `App` component
6. In the `List` component, use the `PersonContext` instead of a local state.

Optional: Create a function `usePersonContext` that uses `useContext` to access the `PersonContext`. If it's null, it throws an exception.
