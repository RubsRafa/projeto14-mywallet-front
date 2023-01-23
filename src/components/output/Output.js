import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./OutputCSS.js";
import axios from "axios";
import Context from "../contextAPI/Context.js";

export default function Output() {
    const { token, reload, setReload } = useContext(Context)

    const [value, setValue] = useState(); 
    const [description, setDescription] = useState(); 
    const navigate = useNavigate(); 

    function addOutput(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(`${process.env.REACT_APP_API_URL}/entry`, { value, description, type: 'output' }, config)
        .then(() => {
            setReload(!reload)
            navigate('/home')
        })
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TopBar>
                <Welcome>Nova saída</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={addOutput}>
                    <input data-test="registry-amount-input" onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".00" placeholder="Valor" required></input>
                    <input data-test="registry-name-input" onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button data-test="registry-save" type='submit'>Salvar saída</button>
                </form>
            </Inputs>
        </>
    )
}