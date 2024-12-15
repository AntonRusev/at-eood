"use client";

import React, { useState, createContext, useContext } from 'react';


// CONTEXT
export const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children }) {
    const [activeSection, setActiveSection] = useState("Intro");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // Used for disabling the observer temporarily when user clicks on Nav link

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>);
};

// Custom context hook
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (!context) {
        // If used out of scope of the provider
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    };

    return context;
};