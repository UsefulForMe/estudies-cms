import * as React from "react";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { name, address, birthday, parentsId } = data;
    return {
      name,
      address,
      birthday,
      parentsId,
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput source="address" validate={required()} />
        <TextInput source="phone" validate={required()} />

        <DateInput source="birthday" validate={required()} />
        <ReferenceInput source="parentsId" reference="parents">
          <AutocompleteInput optionValue="id" optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
