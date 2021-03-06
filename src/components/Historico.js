import React from 'react';
import styled from 'styled-components';

import Logo from "./Global/Logo";
import Rodape from "./Global/Rodape";

export default function Habitos({ percentage, setPercentage, token, id, name, image }){
    

    return (
        <Corpo>
            <Cabecalho>
                <Logo />
                <Usuario>
                    <img src = {image} alt = "Usuario" />
                </Usuario>
            </Cabecalho>
            <Conteudo>
                <h3>
                    Histórico
                </h3>
                <br />
                <h5>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </h5>
            </Conteudo>
            <Rodape percentage = {percentage} />
        </Corpo>
    );
}
const Corpo = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #E5E5E5;
`;
const Cabecalho = styled.div`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`;
const Usuario = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    img{
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Conteudo = styled.div`
    margin-top: 70px;
    margin-bottom: 80px;
    padding: 50px 20px;
    h3{
        color: #126BA5;
    }
    h5{
        color: #BABABA;
    }
`;

