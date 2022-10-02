import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  useShowController
} from "react-admin";

export const CustomShow = () => {
  const { isLoading, error, record } = useShowController();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  record.address = record.address.split("||").join(", ");

  return (
    <Show>
      <SimpleShowLayout record={record}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="address" />
      </SimpleShowLayout>
    </Show>
  );
};
