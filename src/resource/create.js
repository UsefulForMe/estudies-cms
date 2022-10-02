import * as React from "react";
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CustomCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="subjectClassId" reference="subject-class">
        <AutocompleteInput optionValue="id" optionText="name" />
      </ReferenceInput>

      <TextInput source="name" />
      <SelectInput
        source="type"
        choices={[
          { id: "docs", name: "docs" },
          { id: "pdf", name: "pdf" },
          { id: "video", name: "video" },
          { id: "audio", name: "audio" },
        ]}
      />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);
