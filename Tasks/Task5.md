# Task 5 - React Query

Use React Query in the `List` component to load data.

Either go to `https://tanstack.com/query/v4/docs/react/quick-start` or:

1. In the `App` component:
   1. Create a new instance of the `QueryClient`
   2. Integrate the `QueryClientProvider` component and assign it the `QueryClient`
2. In the `List` component:
   1. Create API functions for loading and deleting records
   2. Create a query for loading data using `useQuery`
   3. Handle the `isLoading` and `isError` states
   4. Display the data
   5. Create a mutation for deleting records and integrate it using `useMutation`
   6. After successfully deleting, call the `queryClient.invalidateQueries` method
