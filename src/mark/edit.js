import * as React from "react";
import {
  AutocompleteInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { score } = data;
    return {
      score,
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="examId" reference="exam">
          <AutocompleteInput
            disabled
            optionValue="id"
            optionText={(record) => {
              return `(${record.subjectClass}) ${record.name}`;
            }}
          />
        </ReferenceInput>

        <ReferenceInput source="studentId" reference="student">
          <AutocompleteInput disabled optionValue="id" optionText={"name"} />
        </ReferenceInput>
        <NumberInput source="score" />
      </SimpleForm>
    </Edit>
  );
};
