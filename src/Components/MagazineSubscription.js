import React from "react";
import Type from "./Type";
import { useContext } from "react";
import { StringContext } from "../App";
import { Divider } from "@churchofjesuschrist/eden-vertical-modular-tile";

const MagazineSubscription = (props) => {
  const { header, textheader, emailheader, magazineSubscription } = props;
  const strings = useContext(StringContext);
  return (
    <div>
      <Type
        Magazine={magazineSubscription?.type}
        Text={magazineSubscription?.text}
        Email={magazineSubscription?.email}
        textheader={textheader}
        header={header}
        emailheader={emailheader}
      />
    </div>
  );
};

export default MagazineSubscription;
