import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    position: fixed;
    width: 100%;
    height: 70px;
    font: 18px/24px 'Sniglet', sans-serif;
    z-index: 2;
`;

export const ImgCart = styled.img`
    height: 30px;
`;

export const CartList = styled.ul`
    position: absolute;
    border-left: 2px solid #333;
    padding: 25px 15px;
    height: calc(100vh - 70px);
    min-width: 300px;
    right: 0;
    top: 0;
    margin-top: 70px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #2bbee2;
        outline: 1px solid slategrey;
    }
`;

export const ActiveList = styled.div`
    position: relative;
    cursor: pointer;
    margin: 0 0 0 auto;
    width: max-content;
`;

export const CartCount = styled.span`
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #2bbee2;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -20px;
    color: #fff;
`;

export const SumCount = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    font-weight: 800;
`;
export const Title = styled.h4`
    font: 16px/22px 'Sniglet', sans-serif;
    font-weight: 800;
`;
