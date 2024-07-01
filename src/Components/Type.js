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
  const [isTextChecked, setTextChecked] = useState(Text || false);
  const [isEmailChecked, setEmailChecked] = useState(Email || false);

  const handleTextChange = () => {
    setTextChecked(!isTextChecked);
  };

  const handleEmailChange = () => {
    setEmailChecked(!isEmailChecked);
  };
  // const value = useContext(StringContext);
  const { applicationData, setApplicationData } = useContext(PageDataContext);
  const { emailSubscriptions } = applicationData;
  const handleSubscriptionChange = (type) => {
    emailSubscriptions.filter((subscription) => subscription.type === type);
    setApplicationData({
      ...applicationData,
      emailSubscriptions: !emailSubscriptions,
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
                    checked={isTextChecked}
                    onChange={handleTextChange}
                  />
                )}

                {textheader}
              </FlexBasisText>
            </label>

            <label>
              <FlexBasisEmail>
                {Email !== undefined && (
                  <Checkbox
                    checked={isEmailChecked}
                    onChange={handleEmailChange}
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
