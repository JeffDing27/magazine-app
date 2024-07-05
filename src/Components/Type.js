import React from "react";
import styled from "styled-components";
import { Checkbox } from "@churchofjesuschrist/eden-form-parts";
import { Divider } from "@churchofjesuschrist/eden-vertical-modular-tile";
import { useState, useContext } from "react";
import { StringContext, PageDataContext } from "../App";

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

const Type = ({ Magazine, Text, Email, header, textheader, emailheader }) => {
  // const [isTextChecked, setTextChecked] = useState(Text || false);
  // const [isEmailChecked, setEmailChecked] = useState(Email || false);

  // const handleTextChange = () => {
  //   setTextChecked(!isTextChecked);
  // };

  // const handleEmailChange = () => {
  //   setEmailChecked(!isEmailChecked);
  // };
  // const value = useContext(StringContext);
  const { applicationData, setApplicationData } = useContext(PageDataContext);
  const { emailSubscriptions } = applicationData;

  const subscriptionMagazine = emailSubscriptions.find(
    (subscription) => subscription.type === Magazine
  );
  const handleSubscriptionChange = (type) => {
    const updatedSubscription = {
      ...subscriptionMagazine,
      [type]: !subscriptionMagazine[type],
    };
    const updatedEmailSubscriptions = emailSubscriptions.map((data) => {
      if (data.type === Magazine) {
        return updatedSubscription;
      }
      return data;
    });
    setApplicationData({
      ...applicationData,
      emailSubscriptions: updatedEmailSubscriptions,
    });
  };

  return (
    <div>
      <MarginLeftWrapper>
        <FlexRow>
          <FlexBasisMeg>
            {Magazine}
            {header}
          </FlexBasisMeg>

          <FlexWrapper>
            <label>
              <FlexBasisText>
                {Text !== undefined && (
                  <Checkbox
                    checked={subscriptionMagazine.text}
                    onChange={() => handleSubscriptionChange("text")}
                  />
                )}

                {textheader}
              </FlexBasisText>
            </label>

            <label>
              <FlexBasisEmail>
                {Email !== undefined && (
                  <Checkbox
                    checked={subscriptionMagazine.email}
                    onChange={() => handleSubscriptionChange("email")}
                  />
                )}
                {emailheader}
              </FlexBasisEmail>
            </label>
          </FlexWrapper>
        </FlexRow>
      </MarginLeftWrapper>
      <Divider />
    </div>
  );
};

export default Type;
