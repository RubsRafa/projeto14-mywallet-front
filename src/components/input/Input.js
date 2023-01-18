import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./InputCSS.js";

export default function Input() {

    const [value, setValue] = useState(); 
    const [description, setDescription] = useState(); 
    const navigate = useNavigate(); 

    return (
        <>
            <TopBar>
                <Welcome>Nova entrada</Welcome>
            </TopBar>
            <Inputs>
                <form>
                    <input onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".00" placeholder="Valor" required></input>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button type='submit' onClick={() => {
                        navigate('/home')
                    }}>Salvar entrada</button>
                </form>
            </Inputs>
        </>
    )
}