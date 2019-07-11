import styled from 'styled-components'

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const BuyBtn = styled.button`
    border-radius: 3px;
    outline: none;
    border: none;
    background: #999;
    display: flex;
    margin: 20px auto 0;
    justify-content: center;
    border: 1px solid #333;
    cursor: pointer;
    width: 100px;
    color: #fff;
    transition: all .3s;
    padding: 5px;
    font-weight: 800;
    :hover{
        transition: all .3s;
        transform: scale(1.1);
        background: #4ab94e;
    }
`;
export const CartImg = styled.img`
    height: 60px;
    width: 70px;
`;
