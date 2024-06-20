import React from "react";
import Email from "./Email";
import { Icon } from "@churchofjesuschrist/eden-tile-parts";
import { Edit } from "@churchofjesuschrist/eden-icons";
import styled from "styled-components";
import { useContext } from "react";
import { StringContext } from "../App";

const FlexRow = styled("div")`
  display: flex;
  flex-direction: row;
`;

const FlexBasis25 = styled("div")`
  flex-basis: 25%;
`;

const AddressWrapper = styled("div")`
  margin-left: 0.75rem;
`;

const HeaderStyleFlex = styled("div")`
  font-weight: bold;
  display: flex;
`;

const EmailWrapper = styled("div")`
  margin-left: 0.75rem;
  flex-basis: 50%;
`;

const Address = ({ street, city, state, zip }) => {
  const { Address } = useContext(StringContext);

  return (
    <FlexRow>
      <FlexBasis25>
        <AddressWrapper>
          <HeaderStyleFlex>
            {Address}
            <Icon
              Icon={Edit}
              isThemed
              theme={{
                primaryColor: "#007da5",
              }}
            />
          </HeaderStyleFlex>

          <div>{street}</div>
          <div>
            {city}, {state} {zip}
          </div>
        </AddressWrapper>
      </FlexBasis25>

      <EmailWrapper>
        <Email />
      </EmailWrapper>
    </FlexRow>
  );
};
export default Address;
