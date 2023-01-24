import styled, { keyframes } from "styled-components";

const animeImg = keyframes`
    from {
        transform: translateX(5px);
    }
    to {
        transform: translateX(-5px);
    }
`

export const ContainerImg = styled.div`
    position: relative;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    background-color: #00000021;
    overflow: hidden;
    
    
    &::before, &::after {
        position: absolute;
        content: "";
        width: 50%;
        height: 80%;
        background-color: #000;
        filter: blur(10px);
    }
    
    &::before {
        left: 50%;
        top: 20%;
    }
    &::after {
        top: 0%;
        left: 0%;
    }
    .imagem {
        position: relative;
        width: 90%;
        z-index: 1;
        animation: ${animeImg} 2s infinite alternate ease-in-out;
    }

`

