import React from 'react';
import styled from "styled-components";
import LockImg from '../images/homemap_lock.svg';

const TaskBox = styled.div`
    width: 330px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F5F5F8;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`

const Title = styled.div`
    color: #000;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    padding-top : 2px;
    line-height: normal;
`

const Context = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left : 20px;
`;

const Time = styled.div`
    color: #777777;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-top : 8px;

`

const Lock = styled.img`
    width: 30px;
    height: 63px;
    padding-left : 25px;
    flex-shrink: 0;
`

function MapHomeBox(props) {
    return (
        <TaskBox>
            <Context>
                <Title>{props.title}</Title>
                <Time>{props.time}</Time>
            </Context>
            {props.title.includes('자주 가는') && <Lock src={LockImg} alt="Lock" />}
        </TaskBox>
    );
}

export default MapHomeBox;