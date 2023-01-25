import styled from "styled-components";

export const SectionProject = styled.section`
    
    width: 100%;
    height: 600px;
    background: -webkit-linear-gradient(to right, #6441a5, #2a0845);
    background: linear-gradient(to right, #6441a5, #2a0845);

    &::before, &::after {
        position: absolute;
        content: "";
        filter: blur(150px);
        background: linear-gradient(90deg, #2a0845, #0f0);
        border-radius: 50%;
        height: 360px;
        width: 360px;
    }
    &::before {
        top: 100%;
        left: 10%;
    }
    &::after {
        top: 70%;
        left: 40%;
    }
`