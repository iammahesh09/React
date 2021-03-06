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
