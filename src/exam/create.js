import * as React from "react";
import {
  AutocompleteInput,
  Create,
  NumberInput,
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
      <NumberInput source="duration" />
      <SelectInput
        source="type"
        choices={[
          { id: "theory", name: "theory" },
          { id: "practice", name: "practice" },
        ]}
      />
      <NumberInput source="factor" />
    </SimpleForm>
  </Create>
);
