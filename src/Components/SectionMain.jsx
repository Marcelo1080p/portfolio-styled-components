import styled from "styled-components";

export const SectionMain = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    background: -webkit-linear-gradient(to right, #6441a5, #2a0845);
    background: linear-gradient(to right, #6441a5, #2a0845);
    height: 800px;
    width: 100%;
    height: 700px;
    border: 1px solid #000;
    overflow: hidden;


    &::before, &::after {
        position: absolute;
        content: "";
        filter: blur(150px);
        background: linear-gradient(90deg, #2a0845, aqua);
        border-radius: 50%;
        height: 360px;
        width: 360px;
    }
    &::before {
        top: 10%;
        left: 10%;
    }
    &::after {
        top: 50%;
        left: 70%;
    }
`