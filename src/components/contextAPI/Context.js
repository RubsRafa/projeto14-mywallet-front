import { createContext } from "react";

const Context = createContext({
    name: null,
    token: null,
    reload: null,
    item: null
});


export default Context; 