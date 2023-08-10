import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 400px;
    height: 236px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SquareText = styled.p`
    width: 300px;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const Button = styled.button`
    width: 80px;
    height: 39px;
    border-radius: 10px;
    background: #D9D9D9;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;

  /* 버튼 안의 텍스트 스타일 적용 */
    color: #000;
    text-align: center;
    font-family: Inter;
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
                <Button>다음</Button>
            </Square>
        </div>
    );
};

export default ExcerciseBox;
