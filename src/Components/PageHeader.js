import React from "react";

import Header from "./Header";

const TitleHeader = (props) => {
  const { title, message, titleSize, fontWeight } = props;
  return (
    <div>
      <Header
        title={title}
        message={message}
        titleSize={titleSize}
        fontWeight={fontWeight}
      />
    </div>
  );
};

export default TitleHeader;
