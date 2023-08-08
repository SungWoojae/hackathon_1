import styled from "styled-components";

const TaskBox = styled.div`
    width: 330px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #DAE6F6;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
    margin: 20px;
    display: flex;
    flex-direction: column;
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

const Time = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

function MapHomeBox(props) {
    return (
        <TaskBox>
            <Title>{props.title}</Title>
            <Time>{props.time}</Time>
        </TaskBox>
    );
}

export default MapHomeBox;