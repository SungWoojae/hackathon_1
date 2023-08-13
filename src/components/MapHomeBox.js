import React from 'react';
import styled from "styled-components";
import LockImg from '../images/homemap_lock.svg';

const TaskBox = styled.div`
    width: 330px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #DAE6F6;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

const Title = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Context = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Time = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

// const ContentContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
// `

const Lock = styled.img`
    width: 57px;
    height: 63px;
    flex-shrink: 0;
    /* Additional styles if needed */
`

function MapHomeBox(props) {
    return (
        <TaskBox>
            {/* <ContentContainer> */}
                <Context>
                    <Title>{props.title}</Title>
                    <Time>{props.time}</Time>
                </Context>
                {props.title.includes('실습 3') && <Lock src={LockImg} alt="Lock" />}
            {/* </ContentContainer> */}
        </TaskBox>
    );
}

export default MapHomeBox;