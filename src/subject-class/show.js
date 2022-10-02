import * as React from "react";
import {
  ArrayField,
  Datagrid,
  DateField,
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
        <ReferenceField source="subjectId" reference="subject">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="name" />
        <TextField source="code" />
        <ReferenceField source="teacherId" reference="teacher">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="startAt" />
        <DateField source="endAt" />

        <ArrayField source="students" label="Student">
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <DateField source="birthday" />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};
