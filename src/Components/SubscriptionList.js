import React from "react";
import Magazine from "./Magazine";

const SubscriptionList = ({ subscriptions, type, status, subscribed }) => {
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
          onClick={subscribed}
        />
      ))}
    </div>
  );
};

export default SubscriptionList;
