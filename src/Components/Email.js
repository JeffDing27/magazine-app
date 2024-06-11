import React from "react";
import { Checkbox } from "@churchofjesuschrist/eden-form-parts";
import { Tooltip } from "@churchofjesuschrist/eden-form-parts";
import styled from "styled-components";
import { useContext } from "react";
import { StringContext } from "../App";

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
  return (
    <div className="">
      <FlexNameIcon>
        <FontWeight>{value.Email_Renewel}</FontWeight>
        <Tooltip />
      </FlexNameIcon>
      <p>{value.Email_Renewel_Description}</p>

      <FlexMessageCheckbox>
        <Checkbox checked={false} />
        <MarginLeft>{value.Email_Checkbox}</MarginLeft>
      </FlexMessageCheckbox>
    </div>
  );
};

export default Email;
