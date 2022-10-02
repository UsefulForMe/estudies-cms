import * as React from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { name, address, birthday } = data;
    return {
      name,
      address,
      birthday,
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
