import { Welcome, TopBar, Registers, Empty, Options, Option, Text, Unite, Balance } from "./HomeCSS";
import LogOut from '../../img/LogOut.png';
import Plus from '../../img/plus.png';
import Minus from '../../img/minus.png';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from '../contextAPI/Context.js'


export default function Home() {
    const navigate = useNavigate();
    const [balances, setBalances] = useState();
    const { token } = useContext(Context)
    const [amount, setAmount] = useState([]); 
    const [sum, setSum] = useState(0);
    console.log(amount)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/entry`, config)
            .then((res) => {
                if (res.data.length !== 0) {
                    setBalances(res.data)
                    setAmount(res.data.map(i => {
                        if (i.type === 'input') {
                            return Number(i.value)*(1)
                        } else {
                            return Number(i.value)*(-1)
                        }
                    }))
                } 
            })
            .catch((err) => console.log(err.response.data))
    }, [])

    useEffect(() => {
        let results = 0;
        for (let i = 0; i < amount.length; i++) {
            results += amount[i]
        }
        setSum(results)
    },[])

    return (
        <>
            <TopBar>
                <Welcome>Olá, Estranho</Welcome>
                <img onClick={() => {
                    navigate('/')
                }} src={LogOut} alt='logout' />
            </TopBar>
            <Registers>

                {!balances &&
                    <Empty>
                        <h1>Não há registros de entrada ou saída</h1>
                    </Empty>
                }

                {balances && (
                    balances.map((i) => (
                        <Text cor={i.type}>
                            <Unite>
                                <h1>{i.date}</h1>
                                <h2>{i.description}</h2>
                            </Unite>
                            <h3>{i.value}</h3>
                        </Text>
                    ))
                )
                }

                {balances &&
                    <Balance>
                        <h1>SALDO</h1>
                        <h3>{sum}</h3>
                    </Balance>
                }


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