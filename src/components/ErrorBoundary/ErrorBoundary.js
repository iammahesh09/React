import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('get derived state from error is fired');
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log('component did catch is fired');
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div className="text-danger text-center display-4">Something went wrong.</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
