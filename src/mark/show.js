import * as React from "react";
import {
  NumberField,
  ReferenceField,
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
        <ReferenceField source="examId" reference="exam">
          <TextField source="subjectClass" />
          <span> - </span>
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="studentId" reference="student">
          <TextField source="name" />
        </ReferenceField>

        <NumberField source="score" />
      </SimpleShowLayout>
    </Show>
  );
};
