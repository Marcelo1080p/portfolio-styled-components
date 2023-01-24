import styled, { keyframes } from "styled-components";

const animeImg = keyframes`
    from {
        transform: translate(-5px, 5px);
        
    }
    to {
        transform: translate(5px, -5px);
    }
`


const backgroundAnime = keyframes`
    from {
        background-position: 0 50%;
    }

    to {
        background-position: 100% 0;
    }
`

export const ContainerImg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 250px;
    height: 250px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    overflow: hidden;

    
    
    &::before, &::after {
        position: absolute;
        content: "";
        width: 50%;
        height: 80%;
        background: linear-gradient(to right, #536976, #292e49);
        background-size: 300% 300%;
        animation: ${backgroundAnime} 5s infinite alternate;
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
        border-radius: 8px;
        animation: ${animeImg} 2s infinite alternate ease-in-out;
    }

`

