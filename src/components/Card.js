import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 1px solid #007791;
    padding: 30px;
    max-width: 700px;
    background: #e0d6ff;
    margin: 10px;
`;

const Image = styled.img`
    max-width: 100%;
`;

const Header = styled.h1`
    color: #007791;
`;

const Text = styled.text`
    color: #007791;
`;

export default class Card extends React.Component {
    render(){
        return(
            <CardWrapper>
                <Header>{this.props.title}</Header>
                <Image src={this.props.imageUrl} />
                <Text>{this.props.text}</Text>

            </CardWrapper>
        )
    }
};