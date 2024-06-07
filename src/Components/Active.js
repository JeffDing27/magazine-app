import React, { useState } from "react";
import { Divider } from "@churchofjesuschrist/eden-vertical-modular-tile";
import { Drawer, Summary } from "@churchofjesuschrist/eden-drawer";
import ClickOpen from "./ClickOpen";
import SubscriptionList from "./SubscriptionList";

const Active = ({ title, data, filterType }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div>
        <Drawer>
          <Summary>
            <h3>{title}</h3>
          </Summary>

          <Divider inset />
          <SubscriptionList subscriptions={data} filterType={filterType} />

          <div>
            {ClickOpen && (
              <ClickOpen
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
              />
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
};
export default Active;
