import styled from 'styled-components'
import { Global } from './global'

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
`;
export const BuyBtn = styled.button`
    border-radius: 3px;
    outline: none;
    border: none;
    background: #999;
    display: flex;
    margin: ${props => (props.cart ? '0 auto' : '20px auto 0')};
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

export { Global }
