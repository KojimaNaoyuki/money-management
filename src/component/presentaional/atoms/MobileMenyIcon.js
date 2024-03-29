import styled from 'styled-components';

const MobileMenuIconBox = styled.button`
    margin: 0;
    padding: 3px 15px;
    background-color: transparent;
    border: none;
    outline: none !important;
    cursor: pointer;
    & > span {
        margin: 0;
        margin-top: 10px;
        width: 35px;
        height: 2px;
        display: block;
        background-color: #FF9090;
        transition: transform 0.7s;
    }
    &:first-child {
        margin: 0;
    }
`;

const MobileMenuIcon = (props) => {
    return(
        <MobileMenuIconBox id='mobile-menu-icon' onClick={props.clickedFn}>
            <span></span>
            <span></span>
            <span></span>
        </MobileMenuIconBox>
    );
}
export default MobileMenuIcon;