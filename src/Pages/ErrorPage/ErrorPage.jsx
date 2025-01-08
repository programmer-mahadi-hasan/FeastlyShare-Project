import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="max-w-md p-6 bg-card shadow-lg rounded-lg">
                <img className="mx-auto" src="https://placehold.co/150?text=🚨" alt="error-icon" />
                <h1 className="text-3xl text-primary-foreground font-bold mt-4">Oops! Something went wrong.</h1>
                <p className="text-secondary-foreground my-4">The page you are looking for might be temporarily unavailable.</p>
                <Link to={'/'} className="bg-orange-500 text-primary-foreground mt-4 py-2 px-4 rounded-lg hover:bg-orange-700">Go back to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;