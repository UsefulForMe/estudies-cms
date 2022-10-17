import * as React from "react";
import {
  AutocompleteInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { name, duration, type, factor } = data;
    return {
      name,
      duration,
      type,
      factor,
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="subjectClassId" reference="subject-class">
          <AutocompleteInput disabled optionValue="id" optionText="name" />
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
    </Edit>
  );
};
