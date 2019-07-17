import styled from 'styled-components'

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
export const TitleCheck = styled.h4`
    text-align: center;
`;
export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CartImg = styled.img`
    height: 60px;
    width: 70px;
`;
export const SumCount = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    font-weight: 800;
`;
