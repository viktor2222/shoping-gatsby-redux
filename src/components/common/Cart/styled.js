import styled from 'styled-components'

export const SumCount = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    font-weight: 800;
`;
export const CloseButton = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    opacity: 0.3;
    position: absolute;
    right: 20px;
    top: 10px;
    :hover {
        opacity: 1;
    }
    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 15px;
        width: 2px;
        background-color: #333;
    }
    :before {
        transform: rotate(45deg);
    }
    :after {
        transform: rotate(-45deg);
    }
`;
