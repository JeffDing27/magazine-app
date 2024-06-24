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

  subscribeText,
  unsubscribeText,
}) => {
  // Added equal sign and arrow function

  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
  };
  function formatDate(dateArrayFormatted) {
    const currentDate = new Date(dateArrayFormatted);
    const options = { month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const parts = formattedDate.split(" ");
    const month = parts[0];
    const year = parts[1];

    return month + ", " + year;
    // with template literal:
    // const [month, year] = formattedDate.split(" ");
    // return `${month}, ${year}`; //Template literals are enclosed by backticks and whatever is inside `${}` is evaluated and inserted into the string.
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
      <div>
        <FlexRow>
          <FlexPosition>{Name}</FlexPosition>
          <FlexPosition>{ExpiresText}</FlexPosition>
          <FlexPosition>
            {!subscribed && (
              <button onClick={handleSubscribe}>{subscribeText}</button>
            )}
            {subscribed && (
              <button onClick={handleUnsubscribe}>{unsubscribeText}</button>
            )}
          </FlexPosition>
        </FlexRow>
        <FlexRow1>
          <FlexPosition>{language}</FlexPosition>
          <FlexPosition>{formattedDate}</FlexPosition>
        </FlexRow1>
      </div>
    </div>
  );
};

export default Magazine;
