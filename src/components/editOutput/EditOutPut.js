import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./EditOutPutCSS";
import axios from "axios";
import Context from "../contextAPI/Context.js";

export default function EditOutput() {
    const { token, item } = useContext(Context)

    const [value, setValue] = useState(); 
    const [description, setDescription] = useState(); 
    const navigate = useNavigate(); 

    function editOutput(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(value, description)

        axios.put(`${process.env.REACT_APP_API_URL}/entry/${item._id}`, { value, description, type: 'output' }, config)
        .then(() => navigate('/home'))
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TopBar>
                <Welcome>Editar saída</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={editOutput}>
                    <input onChange={(e) => setValue(e.target.value)} value={value ? value : item.value} type='number' step=".00" placeholder="Valor" required></input>
                    <input onChange={(e) => setDescription(e.target.value)} value={description ? description : item.description} type='text' placeholder="Descrição" required></input>
                    <button type='submit'>Atualizar saída</button>
                </form>
            </Inputs>
        </>
    )
}