# Task 3 - React Router

Integrate React Router into the application.

1. Use the `BrowserRouter` to define the following routes in the App component:
   1. `/`, to render the `List` component
   2. `/create`, to render the `Form` component for creating a new record
   3. `/edit/:id`, to render the `Form` component for modifying an existing record
   4. `*`, to display an error message
2. Remove form and save logic from the `List` component
3. Navigate to the `/create` route using the New button in the `List` component with the `useNavigate` function
4. Also navigate to the `/edit/:id` route in the `ListItem` component using the `useNavigate` function
5. Insert the save logic from the `usePerson` function into the `Form` component
6. When a record is being edited, load the data using a combination of `useParams` and `useEffect`
7. After saving or canceling, navigate back to the list using `useNavigate`
