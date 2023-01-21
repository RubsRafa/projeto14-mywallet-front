import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    
    return (
        <Context.Provider value={{
            name,
            setName,
            token,
            setToken
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;