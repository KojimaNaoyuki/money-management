import styled from 'styled-components';

import MobileMenyIcon from '../atoms/MobileMenyIcon';

const HeaderBox = styled.div``;

const Header = (props) => {
    const openMenu = () => {
        document.querySelector('body').classList.toggle('open');
    }

    return(
        <HeaderBox>
            <MobileMenyIcon clickedFn={openMenu} />
        </HeaderBox>
    );
}
export default Header;