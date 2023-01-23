import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome, TopBar, Inputs } from "./EditOutPutCSS";
import axios from "axios";
import Context from "../contextAPI/Context.js";

export default function EditOutput() {
    const { token, item, reload, setReload } = useContext(Context)

    const [value, setValue] = useState(item.value); 
    const [description, setDescription] = useState(item.description); 
    const navigate = useNavigate(); 

    function editOutput(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.put(`${process.env.REACT_APP_API_URL}/entry/${item._id}`, { value, description, type: 'output' }, config)
        .then(() => {
            setReload(!reload)
            navigate('/home')
        })
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TopBar>
                <Welcome>Editar saída</Welcome>
            </TopBar>
            <Inputs>
                <form onSubmit={editOutput}>
                    <input data-test="registry-amount-input" onChange={(e) => setValue(e.target.value)} value={value} type='number' step=".01" placeholder="Valor" required></input>
                    <input data-test="registry-name-input" onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder="Descrição" required></input>
                    <button data-test="registry-save" type='submit'>Atualizar saída</button>
                </form>
            </Inputs>
        </>
    )
}