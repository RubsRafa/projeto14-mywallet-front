import styled from "styled-components";

export const Logo = styled.div`
text-align: center;
margin-top: 95px;
`;
export const Inputs = styled.div`
width: 326px;
margin: 24px auto;
text-align: center;
input {
    margin-top: 13px;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #D4D4D4;
    padding: 12px;
    font-size: 20px;
    ::placeholder{
        font-family: Raleway, sans-serif;
        font-size: 20px;
        color: #000000;
    }
}
button{
    width: 326px;
    height: 46px;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 700;
    text-align: center;
    margin-top: 13px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
}
`;
export const RegisterButton = styled.div`
color: #ffffff;
text-align: center;
font-family: Raleway, sans-serif;
font-size: 15px;
font-weight: 700;
`;