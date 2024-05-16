import React from "react";

const Active = ({ showSubscription, title = "Active" }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>
          _____________________________________________________________________________________________________________
        </p>
        <div className="flex flex-row">
          <div class="basis-1/4">Liahona</div>
          <div class="basis-1/4">Expires</div>
          <div class="basis-1/4">Renew Unsubscribe</div>
        </div>
        <div className="flex flex-row">
          <div class="basis-1/4">English</div>
          <div class="basis-1/4">Dec,2023</div>
        </div>
      </div>

      <br></br>
      {showSubscription && (
        <div>
          <div className="flex flex-row">
            <div class="basis-1/4">Liahona</div>
            <div class="basis-1/4">Expires</div>
            <div class="basis-1/4">Renew Unsubscribe</div>
          </div>
          <div className="flex flex-row">
            <div class="basis-1/4">English</div>
            <div class="basis-1/4">Dec,2023</div>
          </div>
        </div>
      )}
      <br></br>
      <p>Add Additional</p>
      <p>
        _________________________________________________________________________________________________________________
      </p>
    </div>
  );
};
export default Active;
