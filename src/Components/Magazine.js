import React from "react";
import { useState } from "react";
import styled from "styled-components";

const FlexRow = styled("div")`
  display: flex;
  flex-direction: row;
`;

const FlexRow1 = styled("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const FlexPosition = styled("div")`
  flex-basis: 25%;
`;

const Magazine = ({
  Name,
  ExpiresText,
  language,
  dateText,
  onSubscribe,
  onUnsubscribe,
  subscribeText,
  unsubscribeText,
}) => {
  // Added equal sign and arrow function

  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    if (onSubscribe) {
      onSubscribe();
    }
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
    if (onUnsubscribe) {
      onUnsubscribe();
    }
  };

  return (
    <div>
      <FlexRow>
        <FlexPosition>{Name}</FlexPosition>
        <FlexPosition>{ExpiresText}</FlexPosition>
        <FlexPosition>
          <button onClick={subscribed ? handleUnsubscribe : handleSubscribe}>
            {subscribed ? unsubscribeText : subscribeText}
          </button>
        </FlexPosition>
      </FlexRow>
      <FlexRow1>
        <FlexPosition>{language}</FlexPosition>
        <FlexPosition>{dateText}</FlexPosition>
      </FlexRow1>
    </div>
  );
};

export default Magazine;