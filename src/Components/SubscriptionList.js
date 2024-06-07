import React from "react";
import Magazine from "./Magazine";

const SubscriptionList = ({ subscriptions, filterType }) => {
  const activeMagazine = subscriptions
    .filter((element) => element.type === filterType)
    .map((element) => {
      return element.active.map((element2) => {
        return (
          <Magazine
            Name={element.type}
            ExpiresText="Expires"
            language={element2.lang}
            dateText={element2.expireDate}
            subscribeText="Subscribe"
            unsubscribeText="Unsubscribe"
          />
        );
      });
    });
  return <div>{activeMagazine}</div>;
};

export default SubscriptionList;
