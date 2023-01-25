import styled from "styled-components";
import { backgroundAnime, opacity, translatPos1 } from "./animations";

export const Dados = styled.section`
    height: 20%;
    width: 20%;
    font-family: 'Inter', sans-serif;

    h2 {
        color: #FFF;
        font-size: 2rem;
        animation: ${translatPos1} 2s ;
        
        strong {
            background: linear-gradient(to right, #386f8f, #00C1C2 , #386f8f);
            background-size: 300% 300%;
            animation: ${backgroundAnime} 3s infinite alternate;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
        }
    }



    p {
        color: #ffffff9d;
        animation: ${opacity} 4s ;
        transition-delay: 1s;
        
    }
`