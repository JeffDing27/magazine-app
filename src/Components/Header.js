import React from "react";
import styled from "styled-components";

const FontWeight = styled("h1")`
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: ${(props) => props.titleSize || "50px"};
  margin-left: 0.75rem;
  margin-top: 0.75rem;
`;

const MessageMargin = styled("div")`
  margin-left: 0.75rem;
  margin-top: 0.75rem;
`;

const Header = ({ title, message, titleSize, fontWeight }) => {
  return (
    <div className="header">
      <div>
        <FontWeight titleSize={titleSize} fontWeight={fontWeight}>
          {title}
        </FontWeight>

        <MessageMargin>{message}</MessageMargin>
      </div>
    </div>
  );
};

export default Header;
