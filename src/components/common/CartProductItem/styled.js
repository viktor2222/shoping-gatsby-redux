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
