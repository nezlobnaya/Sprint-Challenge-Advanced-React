- [x] Why would you use class component over function components (removing hooks from the question)?

Class components implement logic and state, they are stateful components, lifecycle methods can be used inside them.

- [x] Name three lifecycle methods and their purposes.

    1. componentDidMount is invoked once when React inserts the component into the DOM. The birth of the component. It is the perfect place to call setState()
   2. componentDidUpdate is called immediately after React updates the DOM.It updates the DOM in response to prop or state changes.
   3. componentWillUnmount is called once immediately before the component is unmounted from the DOM. It can be used for any clean up.The death of the component.

- [x] What is the purpose of a custom hook?

Custom Hooks allows to apply non-visual behavior and stateful logic throughout  components by reusing the same hook over and over again.

- [x] Why is it important to test our apps?

Encourages to write better code, surfaces bugs faster, reduces the risk of regressions, acts as a safety net when making changes or refactoring, make a trustable code, makes us think about the edge cases.