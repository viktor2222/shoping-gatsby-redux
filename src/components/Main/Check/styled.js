import styled from 'styled-components'

export const CheckContainer = styled.div`
    background-color: #fff;
    padding: 15px 5px 25px ;
    position: fixed;
    width: 200px;
    max-height: 90vh;
    height: 100%;
    height: 100%;
    left: 50%;
    margin-left: -100px;
    transform: translate(50%, 50%);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #2bbee2;
        outline: 1px solid slategrey;
    }
`;

export const Overlay = styled.div`
    background-color: rgba(43, 190, 226, .2);
    position: fixed;
    width: 100%;
    height: 200%;
    border-radius: 4px;
`;

export const TitleCheck = styled.h4`
    text-align: center;
`;
