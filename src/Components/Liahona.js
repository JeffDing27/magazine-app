import React from "react";
import { Icon } from "@churchofjesuschrist/eden-tile-parts";
import { CircleSelectedFilled } from "@churchofjesuschrist/eden-icons";
import Image from "./Image";
import styled from "styled-components";
import { useContext } from "react";
import { StringContext } from "../App";
import { useState } from "react";
import { Ghost } from "@churchofjesuschrist/eden-buttons";

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

const Liahona = ({ message, title, imageSrc }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
  };
  //showInfo as a constant inside the component, which means it will always be true.
  const value = useContext(StringContext);
  console.log("Hello", imageSrc);
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
          <Ghost>
            <button onClick={subscribed ? handleUnsubscribe : handleSubscribe}>
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </Ghost>
        </div>
      </FlexBasisSubscribed>
    </FlexRow>
  );
};

export default Liahona;
