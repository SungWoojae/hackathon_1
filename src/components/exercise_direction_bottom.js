import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 400px;
    height: 236px;
    background: #CAD5EC;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SquareText = styled.p`
    width: 300px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const ExcerciseBox = (props) => {
    return (
        <div>
            <Square>
                <SquareText>
                    {props.text}
                </SquareText>
            </Square>
        </div>
    );
};

export default ExcerciseBox;
