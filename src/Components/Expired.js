import React from "react";
import Magazine from "./Magazine";

const SubscriptionList = ({ expiredSubscriptions }) => {
  return (
    <div>
      {expiredSubscriptions.map((element) =>
        element.expired.map((element2) => (
          <Magazine
            Name={element.type}
            ExpiresText="Expires"
            language={element2.lang === "eng" ? "English" : "Spanish"}
            dateText={element2.expireDate}
            subscribeText="Subscribe"
            unsubscribeText="Unsubscribe"
          />
        ))
      )}
    </div>
  );
};

export default SubscriptionList;
