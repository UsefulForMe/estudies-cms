import * as React from "react";
import {
  NumberField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
  useShowController,
} from "react-admin";

export const CustomShow = () => {
  const { isLoading, error, record } = useShowController();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  return (
    <Show>
      <SimpleShowLayout record={record}>
        <TextField source="id" />
        <RichTextField source="message" />
        <NumberField source="time" />
      </SimpleShowLayout>
    </Show>
  );
};
