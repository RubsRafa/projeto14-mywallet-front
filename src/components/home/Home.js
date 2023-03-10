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
                setSum(0)
                if (res.data.myEntry.length !== 0) {
                    setBalances(res.data.myEntry)
                    setSum(res.data.results)
                }
                if (res.data.results >= 0) {
                    setTotalMoney('positive')
                } else {
                    setTotalMoney('negative')
                }
            })
            .catch((err) => console.log(err))
            // eslint-disable-next-line
    }, [reload])

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
                <Welcome data-test="user-name">Olá, {name}</Welcome>
                <img data-test="logout" onClick={() => {
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
                                    <h2 data-test="registry-name" onClick={() => {
                                        setItem(i)
                                        if (i.type === 'input') {
                                            navigate('/editar-entrada')
                                        } else {
                                            navigate('/editar-saida')
                                        }
                                    }}>{i.description}</h2>
                                </Unite>
                                <Unite>
                                    <h3 data-test="registry-amount">{i.value}</h3>
                                    <h4 data-test="registry-delete" onClick={() => removeEntry(i._id)}>x</h4>
                                </Unite>
                            </Text>
                        ))
                    )
                    }

                </Agroup>

                {balances &&
                    <Balance cor={totalMoney}>
                        <h1>SALDO</h1>
                        <h3 data-test="total-amount">{sum}</h3>
                    </Balance>
                }


            </Registers>
            <Options>
                <Option data-test="new-income" onClick={() => {
                    navigate('/nova-entrada')
                }}>
                    <img src={Plus} alt='input' />
                    <h1>Nova entrada</h1>
                </Option>
                <Option data-test="new-expense" onClick={() => {
                    navigate('/nova-saida')
                }}>
                    <img src={Minus} alt='output' />
                    <h1>Nova saída</h1>
                </Option>
            </Options>
        </>
    )
}