import { Welcome, TopBar, Registers, Empty, Options, Option, Text, Unite, Balance, Agroup } from "./HomeCSS";
import LogOut from '../../img/LogOut.png';
import Plus from '../../img/plus.png';
import Minus from '../../img/minus.png';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from '../contextAPI/Context.js'


export default function Home() {
    const navigate = useNavigate();
    const { token, name, reload, setReload, setItem } = useContext(Context)

    const [balances, setBalances] = useState();
    const [amount, setAmount] = useState([]);
    const [sum, setSum] = useState(0);
    const [totalMoney, setTotalMoney] = useState('');
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/entry`, config)
            .then((res) => {
                setBalances(false)
                if (res.data.length !== 0) {
                    setBalances(res.data)
                    setAmount(res.data.map(i => {
                        if (i.type === 'input') {
                            return Number(i.value) * (1)
                        } else {
                            return Number(i.value) * (-1)
                        }
                    }))
                }
                calcSum();
            })
            .catch((err) => console.log(err.response.data))
            // eslint-disable-next-line
    }, [reload])

    function calcSum() {
        let results = 0;
        for (let i = 0; i < amount.length; i++) {
            results += amount[i];
            setSum(results.toFixed(2))
        }
        
        if (results >= 0) {
            setTotalMoney('positive')
        } else {
            setTotalMoney('negative')
        }
        // setReload(!reload)
    }

    function removeEntry(id) {

        if (!window.confirm('Confirmação: gostaria realmente de apagar o registro?')) {
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.delete(`${process.env.REACT_APP_API_URL}/entry/${id}`, config)
            .then(() => {
                setReload(!reload)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <TopBar>
                <Welcome>Olá, {name}</Welcome>
                <img onClick={() => {
                    navigate('/')
                }} src={LogOut} alt='logout' />
            </TopBar>
            <Registers>
                <Agroup>

                    {!balances &&
                        <Empty>
                            <h1>Não há registros de entrada ou saída</h1>
                        </Empty>
                    }

                    {balances && (
                        balances.map((i, index) => (
                            <Text key={index} cor={i.type}>
                                <Unite>
                                    <h1>{i.date}</h1>
                                    <h2 onClick={() => {
                                        setItem(i)
                                        if (i.type === 'input') {
                                            navigate('/editar-entrada')
                                        } else {
                                            navigate('/editar-saida')
                                        }
                                    }}>{i.description}</h2>
                                </Unite>
                                <Unite>
                                    <h3>{i.value}</h3>
                                    <h4 onClick={() => removeEntry(i._id)}>x</h4>
                                </Unite>
                            </Text>
                        ))
                    )
                    }

                </Agroup>

                {balances &&
                    <Balance cor={totalMoney}>
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