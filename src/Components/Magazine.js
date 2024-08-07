import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { PageDataContext } from "../App";

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
  magazineStatus,
  subscribeText,
  unsubscribeText,
}) => {
  console.log("hi", magazineStatus);
  // Added equal sign and arrow function
  const { applicationData, setApplicationData } = useContext(PageDataContext);
  const { magazinesSubscriptions } = applicationData;

  const magazineType = magazinesSubscriptions.find(
    (subscription) => subscription.type === Name
  );

  const subscribed = magazineType.subscribed;

  const handleSubscriptionChange = () => {
    const updatedArray = magazineType[magazineStatus].filter((sub) => {
      const langMatch = sub.lang === language.slice(0, 3).toLowerCase();
      const dateMatch = sub.expireDate === dateText;
      return !(langMatch && dateMatch);
    });
    console.log(updatedArray);
    const updatedSubscription = {
      ...magazineType,
      [magazineStatus]: updatedArray,
    };
    console.log(updatedSubscription);
    const updatedSubscriptions = magazinesSubscriptions.map((data) => {
      if (data.type === Name) {
        return updatedSubscription;
      }
      return data;
    });
    console.log(">>>", updatedSubscription);
    setApplicationData({
      ...applicationData,
      magazinesSubscriptions: updatedSubscriptions,
    });
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
            <button onClick={handleSubscriptionChange}>
              {subscribed ? unsubscribeText : subscribeText}
            </button>
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
