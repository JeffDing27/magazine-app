import React from "react";

import ToolModal from "@churchofjesuschrist/eden-tool-modal";
import { Ghost } from "@churchofjesuschrist/eden-buttons";
import { Action } from "@churchofjesuschrist/eden-action-bar";
import { Add } from "@churchofjesuschrist/eden-icons";
import { Primary } from "@churchofjesuschrist/eden-buttons";
import { Secondary } from "@churchofjesuschrist/eden-buttons";
import { Form } from "@churchofjesuschrist/eden-form-parts";
import { FormField } from "@churchofjesuschrist/eden-form-parts";
import { DateInput } from "@churchofjesuschrist/eden-form-parts";
import { Input } from "@churchofjesuschrist/eden-form-parts";
import { Stack } from "@churchofjesuschrist/eden-tile-parts";
import Row from "@churchofjesuschrist/eden-row";
import { useContext } from "react";
import { StringContext } from "../App";

const ClickOpen = ({ open, onClose, onOpen }) => {
  const refReference = React.useRef();
  const handleClick = () => {
    console.log("Clicked");
  };
  const value = useContext(StringContext);
  return (
    <>
      <Action Icon={Add} onClick={onOpen} />
      <Ghost onClick={onOpen}>Add Additional</Ghost>

      <ToolModal
        footer={
          <Row>
            <Primary onClick={handleClick}>{value.Drawer_Submit}</Primary>
            <Secondary onClick={onClose}>{value.Drawer_Cancel}</Secondary>
          </Row>
        }
        header="Liahona Magazine"
        open={open}
        onClose={onClose}
      >
        <Form
          ref={refReference}
          id=":r0:"
          method="dialog"
          onSubmit={function (event) {
            console.log(Array.from(new FormData(event.target).entries()));
          }}
        >
          <Stack>
            <FormField label={value.Drawer_Name}>
              <Input autofocus="true" name="name" required />
            </FormField>
            <FormField label={value.Drawer_DateOfBirth}>
              <DateInput name="date" required />
            </FormField>
            <FormField label={value.Drawer_Username}>
              <Input name="username" required />
            </FormField>
            <FormField label={value.Drawer_Password}>
              <Input name="password" required type="password" />
            </FormField>
          </Stack>
        </Form>
      </ToolModal>
    </>
  );
};

export default ClickOpen;
