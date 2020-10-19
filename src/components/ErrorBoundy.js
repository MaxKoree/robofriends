import React, {Component} from "react";

class ErrorBoundy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        const hasError = this.state.hasError;
        if (hasError) {
            return <h1>Oops that's not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundy;