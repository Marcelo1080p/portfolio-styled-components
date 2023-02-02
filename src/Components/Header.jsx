import styled from "styled-components";

export const Header = styled.section`
    background: -webkit-linear-gradient(to right, #6441a5, #2a0845);
    background: linear-gradient(to right, #6441a5, #2a0845);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;

    ul {
        margin: 0 50px;
        display: flex;
        width: 500px;
        justify-content: space-around;
        align-items: center;
        
        a {
            z-index: 1;
            font-family: "Inter", sans-serif;
            font-size: 1.3rem;
            color: #000;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
                transform: scale(1.3);
                letter-spacing: 0.2rem;
            }
        }
    }


`