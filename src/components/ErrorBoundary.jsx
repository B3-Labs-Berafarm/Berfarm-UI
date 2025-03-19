import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Optional: send to your error tracking service
        // logErrorToService(error, errorInfo);
    }

    resetErrorBoundary = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback ? (
                this.props.fallback({
                    error: this.state.error,
                    resetErrorBoundary: this.resetErrorBoundary
                })
            ) : (
                <div className="h-screen w-screen flex justify-center items-center flex-col bg-srf-base gap-g2">
                    <h2 className='text-hi title-l font-body font-weight-800'>Something went wrong.</h2>
                    {/* <details style={{ whiteSpace: 'pre-wrap' }} className='text-hi'>
                        <summary>Show error details</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details> */}
                    <button className='text-hi font-body font-weight-600 rounded-full min-w-[120px] bg-action-primary-default hover:bg-action-primary-hover p-g1'
                        onClick={() => window.location.href = '/'}
                    >
                        Go to Home
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;