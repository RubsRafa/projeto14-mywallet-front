import { Logo, Inputs, Register } from "./LoginCSS";
import MyWallet from '../../img/MyWallet.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    function enter (e) {
        e.preventDefault();
        
        const userLogin = {
            email, 
            password
        }
        axios.post(`${process.env.REACT_APP_API_URL}`, userLogin)
    }
    return (
        <>
            <Logo>
                <img src={MyWallet} alt='logo' />
            </Logo>
            <Inputs>
                <form onSubmit={enter}>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="E-mail" required></input>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="Senha" required></input>
                    <button type='submit'>Entrar</button>
                </form>
            </Inputs>
            <Register onClick={() => {
                navigate('/cadastro')
            }}>
            Primeira vez? Cadastre-se!
            </Register>
        </>
    )
}