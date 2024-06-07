import React from "react";
import styled from "styled-components";

const MarginLeftWrapper = styled("div")`
  margin-left: 0.75rem;
`;

const FlexRow = styled("div")`
  display: flex;
  flex-direction: row;
`;

const FlexBasisMeg = styled("div")`
  flex-basis: 25%;
`;

const FlexWrapper = styled("div")`
  display: flex;
  text-indent: 3rem;
  margin-left: auto;
  margin-right: 2rem;
`;

const FlexBasisText = styled("div")`
  flex-basis: 25%;
`;

const FlexBasisEmail = styled("div")`
  flex-basis: 25%;
`;

const Type = ({ Magazine, Text, Email }) => {
  return (
    <MarginLeftWrapper>
      <FlexRow>
        <FlexBasisMeg>{Magazine}</FlexBasisMeg>
        <FlexWrapper>
          <FlexBasisText>{Text}</FlexBasisText>
          <FlexBasisEmail>{Email}</FlexBasisEmail>
        </FlexWrapper>
      </FlexRow>
    </MarginLeftWrapper>
  );
};
export default Type;
