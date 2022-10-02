import * as React from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  ReferenceInput,
  SimpleForm,
} from "react-admin";

export const CustomCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="subjectId" reference="subject">
        <AutocompleteInput optionValue="id" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="teacherId" reference="teacher">
        <AutocompleteInput optionValue="id" optionText="name" />
      </ReferenceInput>

      <DateInput source="startAt" />
      <DateInput source="endAt" />
    </SimpleForm>
  </Create>
);
