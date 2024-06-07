import React from "react";
import { Icon } from "@churchofjesuschrist/eden-tile-parts";
import { CircleSelectedFilled } from "@churchofjesuschrist/eden-icons";
import Image from "./Image";
import styled from "styled-components";
import { useContext } from "react";
import { StringContext } from "../App";

const FlexRow = styled("div")`
  display: flex;
  flex-direction: row;
`;

const FlexBasisImage = styled("div")`
  flex-basis: 25%;
`;

const FlexBasisPostion50 = styled("div")`
  flex-basis: 50%;
  margin-left: 2.75rem;
`;

const FlexBasisSubscribed = styled("div")`
  flex-basis: 50%;
  margin-left: 2.75rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  padding-bottom: 0.75rem;
  display: flex;
`;

const TitleStyles = styled("div")`
  font-weight: bold;
`;

const Liahona = ({
  message,
  title,

  imageSrc,
}) => {
  //showInfo as a constant inside the component, which means it will always be true.
  const value = useContext(StringContext);
  return (
    <FlexRow>
      <FlexBasisImage>
        <Image imageSrc={imageSrc} />
      </FlexBasisImage>

      <FlexBasisPostion50>
        <TitleStyles>{title}</TitleStyles>

        <p>{message}</p>
      </FlexBasisPostion50>
      <FlexBasisSubscribed>
        <Icon
          Icon={CircleSelectedFilled}
          isThemed
          theme={{
            primaryColor: "#6db344",
          }}
        />
        <div className="">
          <p>{value.Magazine_Subscription}</p>
        </div>
      </FlexBasisSubscribed>
    </FlexRow>
  );
};

export default Liahona;
