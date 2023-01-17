import { Welcome, TopBar, Registers, Empty, Options, Option } from "./HomeCSS";
import LogOut from '../../img/LogOut.png';
import Plus from '../../img/plus.png';
import Minus from '../../img/minus.png';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate(); 

    return (
        <>
            <TopBar>
                <Welcome>Olá, Estranho</Welcome>
                <img  onClick={() => {
                    navigate('/')
                }} src={LogOut} alt='logout' />
            </TopBar>
            <Registers>
                <Empty>
                    <h1>Não há registros de entrada ou saída</h1>
                </Empty>
            </Registers>
            <Options>
                <Option onClick={() => {
                    navigate('/nova-entrada')
                }}>
                    <img src={Plus} alt='input' />
                    <h1>Nova entrada</h1>
                </Option>
                <Option onClick={() => {
                    navigate('/nova-saida')
                }}>
                    <img src={Minus} alt='output' />
                    <h1>Nova saída</h1>
                </Option>
            </Options>
        </>
    )
}