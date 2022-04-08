import { Component } from "react";
import styled from 'styled-components';

import AddBtn from "../atoms/AddBtn";

const Title = styled.h3`
    margin: 0;
    padding: 10px;
    font-size: 18px;
    font-width: normal;
    color: #FFF;
`;
const SumSpending = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: normal;
    color: #FFF;
`;
const Budget = styled.h3`
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
    padding: 0px;
    font-size: 18px;
    font-width: normal;
    color: #FFF;
`;

const DetailBoxWrap = styled.div`
    height: 110px;
    overflow-y: scroll;
`;
const DetailBox = styled.div`
    display: flex;
    margin: 10px 0;
`;
const Comment = styled.h4`
    width: 50%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-width: normal;
    color: #FFF;
    text-align: center;
`;
const Price = styled.h4`
    width: 50%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-width: normal;
    color: #FFF;
    text-align: left;
`;

const AddBtnWrap = styled.div`
    position: absolute;
    bottom: 25px;
    left: 10px;
`;

const InputBoxWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`;
const InputBox = styled.div`
`;
const InputComment = styled.p`
    display: block;
    margin: 0;
    padding: 0px;
    font-size: 14px;
    font-width: normal;
    color: #FFF;
`;
const Input = styled.input`
    display: block;
    width: 90%;
    margin: 0;
    padding: 3px;
    border: none;
    outline: none;
    font-size: 14px;
`;

const RegisterWrap = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
`;
const RegisterBtnBack = styled.div`
    width: 150px;
    height: 40px;
    background-color: #FFF;
    border-bottom-right-radius: 5px;
    opacity: 0.4;
`;
const RegisterBtnText = styled.h3`
    position: absolute;
    bottom: 10px;
    right: 55px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-width: normal;
    color: #FFF;
    text-align: left;
`;

let Card;

class SpendingCard3 extends Component {
    constructor(props) {
        super(props);

        Card = styled.div`
            margin: 0;
            padding: 0px;
            position: relative;
            height: 180px;
            background-color: ${props.cardColor};
            border-radius: 5px;
        `;

        this.state = {
            displayState: 0,
            addBtnState: 0,
        }
    }

    changeDisplay() {
        //合計画面と詳細画面へ
        if(this.state.displayState == 0) {
            this.setState({
                displayState: 1
            });
        } else {
            this.setState({
                displayState: 0
            });
        }
    }

    addSpending() {
        //支出入力画面へ
        if(this.state.displayState != 2) {
            this.setState({
                displayState: 2,
                addBtnState: 1
            });
        } else {
            this.setState({
                displayState: 0,
                addBtnState: 0
            });
        }
    }

    display() {
        if(this.state.displayState == 0) {
            return(
                <Card>
                    <Title>{this.props.cardTitle}</Title>
                    <SumSpending onClick={this.changeDisplay.bind(this)}>￥{this.props.nowSpending}</SumSpending>
                    <Budget>予算&emsp;￥{this.props.Budget}</Budget>
                    <AddBtnWrap>
                        <AddBtn state={this.state.addBtnState} clickedFn={this.addSpending.bind(this)} />
                    </AddBtnWrap>
                </Card>
            );
        } else if(this.state.displayState == 1) {
            return(
                <Card>
                    <Title>{this.props.cardTitle}</Title>
                    <DetailBoxWrap onClick={this.changeDisplay.bind(this)}>
                        <DetailBox>
                            <Comment>家賃</Comment>
                            <Price>￥43000</Price>
                        </DetailBox>
                        <DetailBox>
                            <Comment>家賃</Comment>
                            <Price>￥43000</Price>
                        </DetailBox>
                        <DetailBox>
                            <Comment>家賃</Comment>
                            <Price>￥43000</Price>
                        </DetailBox>
                        <DetailBox>
                            <Comment>家賃</Comment>
                            <Price>￥43000</Price>
                        </DetailBox>
                        <DetailBox>
                            <Comment>家賃</Comment>
                            <Price>￥43000</Price>
                        </DetailBox>
                    </DetailBoxWrap>
                    <Budget>合計&emsp;￥47000</Budget>
                    <AddBtnWrap>
                        <AddBtn state={this.state.addBtnState} clickedFn={this.addSpending.bind(this)} />
                    </AddBtnWrap>
                </Card>
            );
        } else if(this.state.displayState == 2) {
            return(
                <Card>
                    <Title>{this.props.cardTitle}</Title>

                    <InputBoxWrap>
                        <InputBox>
                            <InputComment>コメント</InputComment>
                            <Input type="text" />
                        </InputBox>
                        <InputBox>
                            <InputComment>金額</InputComment>
                            <Input type="number" />
                        </InputBox>
                    </InputBoxWrap>

                    <RegisterWrap>
                        <RegisterBtnBack />
                        <RegisterBtnText>登録</RegisterBtnText>
                    </RegisterWrap>
                    <AddBtnWrap>
                        <AddBtn state={this.state.addBtnState} clickedFn={this.addSpending.bind(this)} />
                    </AddBtnWrap>
                </Card>
            );
        }

    }

    render() {
        return(
            this.display()
        );
    }
}

export default SpendingCard3;