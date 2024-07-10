import React from "react";
import Magazine from "./Magazine";

const SubscriptionList = ({
  subscriptions,
  type,
  status,
  magazineActiveExpireStatus,
}) => {
  return (
    <div>
      {subscriptions.map((element) => (
        <Magazine
          Name={type}
          ExpiresText={status}
          language={element.lang === "eng" ? "English" : "Spanish"}
          dateText={element.expireDate}
          subscribeText="Subscribe"
          unsubscribeText="Unsubscribe"
          magazineStatus={magazineActiveExpireStatus}
        />
      ))}
    </div>
  );
};

export default SubscriptionList;
