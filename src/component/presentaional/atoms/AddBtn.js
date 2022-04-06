import styled from "styled-components";

const Btn = styled.div`

`;
const Span1 = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    background-color: #FFF;
    transform: translateY(3px) rotate(90deg);
`
const Span2 = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    background-color: #FFF;
`

const AddBtn = (props) => {

    const display = () => {
        if(props.state == 0) {
            return(
                <Btn onClick={props.clickedFn}>
                    <Span1 />
                    <Span2 />
                </Btn>
            );
        } else {
            return(
                <Btn onClick={props.clickedFn}>
                    <Span2 />
                </Btn>
            );
        }
    }

    return(
        display()
    );
}
export default AddBtn;