import styled from 'styled-components'

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`;
export const CartImg = styled.img`
    height: 60px;
    width: 70px;
`;
export const CloseBtn = styled.span`
  color: red;
  cursor: pointer;
  font-weight: bold;
  opacity: .4;
  padding: 3px;
  &:hover{
      opacity: 1;
  }
`;

export const CartTitle = styled.h4`
  width: 70px;
  
`;
export const CountItem = styled.span`
  background-color: #2bbee2;
  border-radius: 50%;
  padding: 2px 5px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
`;
