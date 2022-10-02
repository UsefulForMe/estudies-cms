import * as React from "react";
import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
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
        <ReferenceField source="subjectClassId" reference="subject-class">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="name" />
        <TextField source="type" />
        <UrlField source="link" />
      </SimpleShowLayout>
    </Show>
  );
};
