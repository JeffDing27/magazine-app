import React from "react";
import { Checkbox } from "@churchofjesuschrist/eden-form-parts";
import { Tooltip } from "@churchofjesuschrist/eden-form-parts";
import styled from "styled-components";
import { useContext } from "react";
import { StringContext, PageDataContext } from "../App";
import { useState } from "react";

const FlexNameIcon = styled("div")`
  display: flex;
  align-items: center;
`;

const FlexMessageCheckbox = styled("div")`
  display: flex;
  align-items: center;
`;

const FontWeight = styled("div")`
  font-weight: bold;
`;

const MarginLeft = styled("div")`
  margin-left: 0.5rem;
`;

const Email = () => {
  const value = useContext(StringContext);
  const { applicationData, setApplicationData } = useContext(PageDataContext);
  // const [isEmailChecked, setEmailChecked] = useState(false);
  const { emailReminders } = applicationData;
  const handleEmailChange = () => {
    //   setEmailChecked(!isEmailChecked);
    setApplicationData({ ...applicationData, emailReminders: !emailReminders });
  };

  return (
    <div className="">
      <FlexNameIcon>
        <FontWeight>{value.Email_Renewel}</FontWeight>
        <Tooltip />
      </FlexNameIcon>
      <p>{value.Email_Renewel_Description}</p>

      <FlexMessageCheckbox>
        <Checkbox checked={emailReminders} onChange={handleEmailChange} />
        <MarginLeft>{value.Email_Checkbox}</MarginLeft>
      </FlexMessageCheckbox>
    </div>
  );
};

export default Email;
