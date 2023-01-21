import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [reload, setReload] = useState(false)
    
    return (
        <Context.Provider value={{
            name,
            setName,
            token,
            setToken,
            reload,
            setReload
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;