import styled from "styled-components";

export const Welcome = styled.div`
color: #ffffff;
font-weight: 700;
font-size: 26px;
`;
export const TopBar = styled.div`
margin: 25px 24px 0 24px;
display: flex;
justify-content: space-between;
`;
export const Registers = styled.div`
width: 326px;
height: 446px;
background-color: #ffffff;
border-radius: 5px;
margin: 15px auto;
box-sizing: border-box;
overflow-y: hidden;
overflow-y: scroll;
position: relative;
`;
export const Empty = styled.div`
font-size: 20px;
color: #868686;
text-align: center;
width: 180px;
margin: 200px auto;
box-sizing: border-box;
`;
export const Options = styled.div`
display: flex;
width: 326px;
margin: 0 auto;
justify-content: space-between;
`;
export const Option = styled.div`
width: 155px;
height: 114px;
background-color: #a328d6;
border-radius: 5px;
display: block;
img {
    margin: 10px 0 0 10px;
}
h1 {
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    margin: 32px 60px 0 10px;
}
`;
export const Text = styled.div`
display: flex;
font-size: 16px;
margin-top: 18px;
justify-content: space-between;
h3 {
    margin-right: 10px;
    color: ${props => props.cor === 'input' ? '#03AC00' : '#C70000'}
}
`;
export const Unite = styled.div`
display: flex;
h1{
    margin-left: 10px;
    width: 40px;
    color: #C6C6C6;
}
h2 {
    margin-left: 10px;
    color: #000000; 
}
`;
export const Balance = styled.div`
box-sizing: border-box;
padding: 5px;
display: flex;
justify-content: space-between;
align-items: flex-end;
width: 97%;
position: absolute;
bottom: 5px; 
h1 {
    font-weight: 700;
}
`;