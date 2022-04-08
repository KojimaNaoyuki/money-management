import styled from 'styled-components';

import Header from './Header';

const SumSpendingCardBox = styled.div`
    position: relative;
    width: 100%;
    height: 215px;
    background-color: #FFF;
`;
const CardTitle = styled.h2`
    margin: 0;
    padding: 10px 0;
    font-size: 18px;
    font-weight: normal;
    color: #000;
    text-align: center;
`;
const SumSpendin = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: normal;
    color: #FF9090;
`;
const Budget = styled.h3`
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    color: #FF9090;
`;
const Month = styled.select`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    width: 60px;
    background-color: #FFF;
    outline: none;
    border: none;
    font-size: 20px;
    color: #FF9090;
    border-bottom: solid 1px #FF9090;
`;
const Option = styled.option``;

const SumSpendingCard = (props) => {
    return(
        <SumSpendingCardBox>
            <Header />
            <Month>
                <Option value="1月">1月</Option>
                <Option value="2月">2月</Option>
                <Option value="3月">3月</Option>
                <Option value="4月">4月</Option>
                <Option value="5月">5月</Option>
                <Option value="6月">6月</Option>
                <Option value="7月">7月</Option>
                <Option value="8月">8月</Option>
                <Option value="9月">9月</Option>
                <Option value="10月">10月</Option>
                <Option value="11月">11月</Option>
                <Option value="12月">12月</Option>
            </Month>
            <CardTitle>合計支出</CardTitle>
            <SumSpendin>￥{props.sumSpendin}</SumSpendin>
            <Budget>予算&emsp;￥{props.budget}</Budget>
        </SumSpendingCardBox>
    );
}
export default SumSpendingCard;