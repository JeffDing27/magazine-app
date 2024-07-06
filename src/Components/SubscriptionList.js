import React from "react";
import Magazine from "./Magazine";

const SubscriptionList = ({ subscriptions, type, status }) => {
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
          isActive={subscriptions}
        />
      ))}
    </div>
  );
};

export default SubscriptionList;
