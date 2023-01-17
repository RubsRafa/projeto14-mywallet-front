import { Logo, Inputs, RegisterButton } from "./RegisterCSS.js";
import MyWallet from '../../img/MyWallet.png';
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate(); 
    return (
        <>
            <Logo>
                <img src={MyWallet} alt="logo" />
            </Logo>
            <Inputs>
                <form>
                    <input type='text' placeholder="Nome" required></input>
                    <input type='email' placeholder="E-mail" required></input>
                    <input type='password' placeholder="Senha" required></input>
                    <input type='password' placeholder="Confirme a senha" required></input>
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