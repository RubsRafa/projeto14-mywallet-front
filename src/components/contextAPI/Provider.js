import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    
    return (
        <Context.Provider value={{
            name,
            setName,
            token,
            setToken,
            id,
            setId
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;