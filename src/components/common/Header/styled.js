import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    height: 70px;
    font: 18px/24px 'Sniglet', sans-serif;
`;

export const ImgCart = styled.img`
    height: 30px;
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
export const Title = styled.h4`
    font: 16px/22px 'Sniglet', sans-serif;
    font-weight: 800;
`;
