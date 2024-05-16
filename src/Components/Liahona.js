import React from "react";

const Liahona = ({ showInfo, message, title = "Liahona" }) => {
  //showInfo as a constant inside the component, which means it will always be true.

  return (
    <div className="Liahona">
      <div className="font-bold">{title}</div>

      <div className="Liahona-info">
        {showInfo && (
          <p>
            Official magazine for adult Church Members <br />
            worldwide, offering teachings from Church <br />
            leaders, inspiring stories, and articles that <br />
            supplement Come, Follow Me.
          </p>
        )}
        {!showInfo && <p>{message}</p>}

        <div className="Liahona-subscribe">
          <p>Subscribed</p>
        </div>
      </div>
    </div>
  );
};

export default Liahona;
