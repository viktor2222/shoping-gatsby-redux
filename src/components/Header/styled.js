import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
`;

export const ImgCart = styled.img`
    height: 30px;
`;

export const CartList = styled.ul`
    position: absolute;
    background-color: #999;
    padding: 15px;
`;

export const ActiveList = styled.div`
    position: relative;
    cursor: pointer;
`;

export const CartCount = styled.span`
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: blue;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -17px;
    color: #fff;
`;
