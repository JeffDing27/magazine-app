import React from "react";
import styled from "styled-components";

const FontWeight = styled("h1")`
  font-weight: bold;
  font-size: 50px;
  margin-left: 0.75rem;
  margin-top: 0.75rem;
`;

const MessageMargin = styled("div")`
  margin-left: 0.75rem;
  margin-top: 0.75rem;
`;

const Header = ({ title, message }) => {
  return (
    <div className="header">
      <div>
        <FontWeight>{title}</FontWeight>

        <MessageMargin>{message}</MessageMargin>
      </div>
    </div>
  );
};

export default Header;
