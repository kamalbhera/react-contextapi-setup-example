import React, { useState } from 'react'
const AppContext = React.createContext();
export const Context = ({ children }) => {
    const [data, setData] = useState([]);
    return (
        <AppContext.Provider value={{data, setData}}>
            { children }
        </AppContext.Provider>
    );
}