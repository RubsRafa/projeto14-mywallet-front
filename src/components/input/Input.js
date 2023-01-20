import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./InputCSS.js";
import Context from '../contextAPI/Context.js'

export default function Input() {
    const { token } = useContext(Context)

    const [value, setValue] = useState(); 
    const [description, setDescription] = useState(); 
    const navigate = useNavigate(); 

    function addInput(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        axios.post(`${process.env.REACT_APP_API_URL}/entry`, { value, description, type: "input" }, config)
        .then(() => navigate('/home'))
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TopBar>
                <Welcome>Nova entrada</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={addInput}>
                    <input onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".00" placeholder="Valor" required></input>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button type='submit'>Salvar entrada</button>
                </form>
            </Inputs>
        </>
    )
}