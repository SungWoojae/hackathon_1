import styled from "styled-components";

const Tab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    height: 33px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    margin: 10px;
    padding: 0 7px;
`

const Image = styled.img`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: #D9D9D9;
`

const Text = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 5px;
`

function Tabs(props) {
  return (
    <Tab className="container">
        <Image src={props.image} alt=""></Image>
        <Text>{props.name}</Text>
    </Tab>
  );
}

export default Tabs;
