# `npm run dev`

## 'The Component Lifecycle'

    Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

### 1.Mounting

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

### 2.Updating

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

### 3.Unmounting

- componentWillUnmount()

### 4.Error Handling

- static getDerivedStateFromError()
- componentDidCatch()

## [React Context](https://www.javatpoint.com/react-context)

Context allows passing data through the component tree without passing props down manually at every level.

In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.

### How to use Context

There are two main steps to use the React context into the React application:

    - Setup a context provider and define the data which you want to store.
    - Use a context consumer whenever you need the data from the store

### When to use Context

Context is used to share data which can be considered "global" for React components tree and use that data where needed, such as the current authenticated user, theme, etc. For example, in the below code snippet, we manually thread through a "theme" prop to style the Button component.

### React Context API

The React Context API is a component structure, which allows us to share data across all levels of the application. The main aim of Context API is to solve the problem of prop drilling (also called "Threading"). The Context API in React are given below.

    - React.createContext
    - Context.provider
    - Context.Consumer
    - Class.contextType

#### Context.Consumer

A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

## [Error Boundaries](https://www.javatpoint.com/react-error-boundaries)

A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

**Note:**
Sometimes, it is not possible to catch Error boundaries in React application. These are:

        - Event handlers
        - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
        - Server-side rendering
        - Errors are thrown in the error boundary itself rather than its children.

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods **static getDerivedStateFromError()** or **componentDidCatch().** Use **static getDerivedStateFromError()** to render a fallback UI after an error has been thrown. Use **componentDidCatch()** to log error information.
