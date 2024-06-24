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
  function formatDate(dateArrayFormatted) {
    const currentDate = new Date(dateArrayFormatted);
    const options = { month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const [month, year] = formattedDate.split(" ");
    return `${month}, ${year}`;
  }

  function checkDate(date) {
    let dateArray = date.split("-");
    let dateArrayFormatted = [];
    for (let i = 0; i < dateArray.length; i++) {
      let number = parseInt(dateArray[i], 10);
      dateArrayFormatted.push(number);
    }

    return dateArrayFormatted.join("-");
  }

  const formattedDate = formatDate(checkDate(dateText));

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
        <FlexPosition>{formattedDate}</FlexPosition>
      </FlexRow1>
    </div>
  );
};

export default Magazine;
