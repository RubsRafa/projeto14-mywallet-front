import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./EditInPutCSS";
import Context from '../contextAPI/Context.js'

export default function EditInput() {
    const { token, item } = useContext(Context)

    const [value, setValue] = useState(item.value); 
    const [description, setDescription] = useState(item.description); 
    const navigate = useNavigate(); 

    function editInput(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        console.log(value, description)
        
        axios.put(`${process.env.REACT_APP_API_URL}/entry/${item._id}`, { value, description, type: "input" }, config)
        .then(() => navigate('/home'))
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TopBar>
                <Welcome>Editar entrada</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={editInput}>
                    <input onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".01" placeholder="Valor" required></input>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button type='submit'>Atualizar entrada</button>
                </form>
            </Inputs>
        </>
    )
}