import { Logo, Inputs, RegisterButton } from "./RegisterCSS.js";
import MyWallet from '../../img/MyWallet.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Register() {
    const navigate = useNavigate(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState(''); 

    function registration(e) {
        e.preventDefault();
        if (password !== confirmation) return; 

        const access = { name, email, password, confirmation }
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, access)
        .then(() => navigate('/'))
        .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <Logo>
                <img src={MyWallet} alt="logo" />
            </Logo>
            <Inputs>
                <form onSubmit={registration}>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder="Nome" required></input>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="E-mail" required></input>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="Senha" required></input>
                    <input onChange={(e) => setConfirmation(e.target.value)} value={confirmation} type='password' placeholder="Confirme a senha" required></input>
                    <button type='submit'>Cadastrar</button>
                </form>
            </Inputs>
            <RegisterButton onClick={() => {
                navigate('/')
            }}>
                Já tem uma conta? Entre agora!
            </RegisterButton>
        </>
    )
}