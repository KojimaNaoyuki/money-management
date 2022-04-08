import { Component } from "react";
import styled from "styled-components";

import SumSpendingCard from "../presentaional/organisms/SumSpendingCard";
import SpendingCard1 from "../presentaional/organisms/SpendingCard1";
import SpendingCard2 from "../presentaional/organisms/SpendingCard2";
import SpendingCard3 from "../presentaional/organisms/SpendingCard3";

const SpendingCardBox = styled.div`
    padding: 0 15px;
`;

const SpendingMagin = styled.div`
    margin: 30px;
`;

class ConfirmationPage extends Component {
    constructor(porps) {
        super(porps);
    }
    render() {
        return(
            <>
                <SumSpendingCard sumSpendin="68000" budget="84000" />
                <SpendingCardBox>
                    <SpendingMagin />

                    <SpendingCard1 cardTitle="固定支出" nowSpending="48000" Budget="52000" cardColor="#FF9090" />

                    <SpendingMagin />

                    <SpendingCard2 cardTitle="食費支出" nowSpending="8000" Budget="12000" cardColor="#90A2FF" />

                    <SpendingMagin />

                    <SpendingCard3 cardTitle="その他支出" nowSpending="12000" Budget="20000" cardColor="#C190FF" />
                    
                    <SpendingMagin />
                </SpendingCardBox>
            </>
        );
    }
}
export default ConfirmationPage;