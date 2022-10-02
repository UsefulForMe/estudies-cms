import * as React from "react";
import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { teacherId, startAt, endAt } = data;
    return {
      teacherId,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
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
    </Edit>
  );
};
