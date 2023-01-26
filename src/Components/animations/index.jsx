import styled, { keyframes } from "styled-components";

export const animeImg = keyframes`
    from {
        transform: translate(-5px, 5px);
        
    }
    to {
        transform: translate(5px, -5px);
    }
`
export const translatPos1 = keyframes`
    from {
        filter: blur(5px);
        transform: translateX(-300px);
    }
    to {
        filter: blur(0px);
        transform: translateX(0);
    }
`

export const opacity = keyframes`
    from {
        filter: blur(5px);
    }
    to {
        filter: blur(0);
    }
`

export const backgroundAnime = keyframes`
    from {
        background-position: 0 50%;
    }

    to {
        background-position: 100% 0;
    }
`