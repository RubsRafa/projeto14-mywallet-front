import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./OutputCSS.js";
import axios from "axios";

export default function Output() {

    const [value, setValue] = useState(); 
    const [description, setDescription] = useState(); 
    const navigate = useNavigate(); 

    function addOutput(e) {
        e.preventDefault(); 

        const outputValue = { value, description, type: 'output' };
        axios.post(`${process.env.REACT_APP_API_URL}/entry`, outputValue)
        .then(() => navigate('/home'))
        .catch((err) => console.log(err))
    }

    return (
        <>
            <TopBar>
                <Welcome>Nova saída</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={addOutput}>
                    <input onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".00" placeholder="Valor" required></input>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button type='submit'>Salvar saída</button>
                </form>
            </Inputs>
        </>
    )
}