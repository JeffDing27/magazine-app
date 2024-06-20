import React, { useContext } from "react";
import Liahona from "./Liahona";
import Active from "./Active";
import { StringContext } from "../App";

const MagazineOption = (props) => {
  const { title, imageSrc, message, magazineSubscriptionData } = props;
  console.log("MagazineOption", imageSrc);
  console.log("magazineSubscriptionData", magazineSubscriptionData);

  const strings = useContext(StringContext);
  return (
    <>
      <Liahona title={title} imageSrc={imageSrc} message={message} />
      <Active
        // title={strings.Active_Title}
        title="Active"
        data={magazineSubscriptionData.active}
        type={magazineSubscriptionData.type}
        status="Expires"
      />
      <Active
        // title={strings.Active_Title3}
        title="Expired"
        data={magazineSubscriptionData.expired}
        type={magazineSubscriptionData.type}
        status="Expired"
        subscribed={magazineSubscriptionData.subscribed}
      />
    </>
  );
};
export default MagazineOption;
