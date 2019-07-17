import styled from 'styled-components'

export const CartContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 3px;
    margin: 20px 18px;
    :hover{
        box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.3);
    }
`;

export const ProductImg = styled.img`
    width: 200px;
    transition: all .3s;
    margin-top: 10px;
    ${CartContainer}:hover & {
        margin-top: -10px;
        transform: scale(.7);
        transition: all .3s;
    }
`;

export const ShowContent = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 40px;
    transition: all .3s;
    text-align: center;
    width: 100%;
    ${CartContainer}:hover & {
        opacity: 1;
        transition: all .3s;
        bottom: 5px;
    }
`;
export const ContainerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
