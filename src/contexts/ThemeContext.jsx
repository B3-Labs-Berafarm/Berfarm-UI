import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Create a ThemeProvider component to wrap the app and provide theme state
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkColorScheme = () => {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            setIsDarkMode(prefersDarkScheme.matches);
        };

        // Check on initial render
        checkColorScheme();

        // Listen for changes to the user's color scheme preference
        const listener = (e) => {
            setIsDarkMode(e.matches);
        };
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);

        // Cleanup on unmount
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
