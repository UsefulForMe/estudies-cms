import * as React from "react";
import {
  AutocompleteInput,
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
} from "react-admin";
import config from "../config";

export const CustomCreate = () => {
  const save = async (data) => {
    const { examId, score, studentId } = data;
    await fetch(
      `${config.backend_url}/mark/student/${studentId}/exam/${examId}`,
      {
        method: "POST",
        body: JSON.stringify({ score }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );
  };

  return (
    <Create>
      <SimpleForm onSubmit={save}>
        <ReferenceInput source="examId" reference="exam">
          <AutocompleteInput
            optionValue="id"
            optionText={(record) => {
              return `(${record.subjectClass}) ${record.name}`;
            }}
          />
        </ReferenceInput>

        <ReferenceInput source="studentId" reference="student">
          <AutocompleteInput optionValue="id" optionText={"name"} />
        </ReferenceInput>
        <NumberInput source="score" />
      </SimpleForm>
    </Create>
  );
};
