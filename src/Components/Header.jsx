import styled from "styled-components";

export const Header = styled.section`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    border: 1px solid;

    ul {
        margin: 0 50px;
        display: flex;
        width: 500px;
        justify-content: space-around;
        align-items: center;
        
        a {
            font-family: "Inter", sans-serif;
            font-size: 1.3rem;
            color: #000;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                transform: scale(1.3);
                letter-spacing: 0.2rem;
            }
        }
    }


`