# Render Optimization

Used `react-hook-form` to handle to entire form structure. It's having `useFormState` custom hooks which says in official document as follows.

This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.

##### Input,Switch,Select,TextArea

Wrapped with react-hook-form and ant design which use form state does not re-render the component if state change.

This form handling can be achived by using inbuild hook `useState` but in the `memo` functions to check the props in deeply. Also need to wrap the root with `React.context`
