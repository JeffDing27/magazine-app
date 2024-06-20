import React from "react";
import styled from "styled-components";

const SubscriptionStyles = styled("div")`
  font-weight: bold;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  margin-left: 0.75rem;
`;

const SubscriptionInfo = () => {
  return (
    <div className="subscription">
      <SubscriptionStyles>
        <h2>Subscription Information</h2>
      </SubscriptionStyles>
    </div>
  );
};

export default SubscriptionInfo;
// Path: magazine-app/src/Components/Type.js
