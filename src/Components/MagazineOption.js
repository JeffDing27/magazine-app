import React, { useContext } from "react";
import Liahona from "./Liahona";
import Active from "./Active";
import { StringContext } from "../App";
import { useState } from "react";

const MagazineOption = (props) => {
  const { title, imageSrc, message, magazineSubscriptionData } = props;
  console.log("MagazineOption", imageSrc);
  console.log("magazineSubscriptionData", magazineSubscriptionData);

  const strings = useContext(StringContext);

  const [isSubscribed, setSubscribed] = useState(
    magazineSubscriptionData.subscribed || false
  );

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
  };
  return (
    <>
      <Liahona
        title={title}
        imageSrc={imageSrc}
        message={message}
        subscribed={isSubscribed}
        onSubscribe={handleSubscribe}
        onSubscribed={handleUnsubscribe}
      />
      {magazineSubscriptionData.active.length > 0 && (
        <Active
          // title={strings.Active_Title}
          title="Active"
          data={magazineSubscriptionData.active}
          type={magazineSubscriptionData.type}
          status="Expires"
          magazineActiveExpireStatus={"active"}
        />
      )}

      {magazineSubscriptionData.expired.length > 0 && (
        <Active
          // title={strings.Active_Title3}
          title="Expired"
          data={magazineSubscriptionData.expired}
          type={magazineSubscriptionData.type}
          status="Expired"
          magazineActiveExpireStatus={"expired"}
        />
      )}
    </>
  );
};
export default MagazineOption;
